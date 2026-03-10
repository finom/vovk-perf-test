import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nls")
export default class NlsController {
  @operation({
    summary: "Get Nls",
  })
  @get()
  static getNls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nls",
  })
  @post("{id}")
  static createNls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
