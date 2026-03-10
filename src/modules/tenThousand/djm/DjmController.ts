import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djm")
export default class DjmController {
  @operation({
    summary: "Get Djm",
  })
  @get()
  static getDjm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djm",
  })
  @post("{id}")
  static createDjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
