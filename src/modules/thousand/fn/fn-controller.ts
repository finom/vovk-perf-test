import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fn")
export default class FnController {
  @operation({
    summary: "Get Fn",
  })
  @get()
  static getFn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fn",
  })
  @post("{id}")
  static createFn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
