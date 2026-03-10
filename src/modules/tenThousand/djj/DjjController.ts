import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djj")
export default class DjjController {
  @operation({
    summary: "Get Djj",
  })
  @get()
  static getDjj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djj",
  })
  @post("{id}")
  static createDjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
