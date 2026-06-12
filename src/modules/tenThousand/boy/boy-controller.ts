import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boy")
export default class BoyController {
  @operation({
    summary: "Get Boy",
  })
  @get()
  static getBoy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boy",
  })
  @post("{id}")
  static createBoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
