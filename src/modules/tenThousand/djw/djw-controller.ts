import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djw")
export default class DjwController {
  @operation({
    summary: "Get Djw",
  })
  @get()
  static getDjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djw",
  })
  @post("{id}")
  static createDjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
