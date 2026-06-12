import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djr")
export default class DjrController {
  @operation({
    summary: "Get Djr",
  })
  @get()
  static getDjr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djr",
  })
  @post("{id}")
  static createDjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
