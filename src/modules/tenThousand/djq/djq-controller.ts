import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djq")
export default class DjqController {
  @operation({
    summary: "Get Djq",
  })
  @get()
  static getDjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djq",
  })
  @post("{id}")
  static createDjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
