import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djc")
export default class DjcController {
  @operation({
    summary: "Get Djc",
  })
  @get()
  static getDjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Djc",
  })
  @post("{id}")
  static createDjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
