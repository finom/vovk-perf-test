import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lru")
export default class LruController {
  @operation({
    summary: "Get Lru",
  })
  @get()
  static getLru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lru",
  })
  @post("{id}")
  static createLru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
