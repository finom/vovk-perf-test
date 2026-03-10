import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lls")
export default class LlsController {
  @operation({
    summary: "Get Lls",
  })
  @get()
  static getLls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lls",
  })
  @post("{id}")
  static createLls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
