import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ln")
export default class LnController {
  @operation({
    summary: "Get Ln",
  })
  @get()
  static getLn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ln",
  })
  @post("{id}")
  static createLn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
