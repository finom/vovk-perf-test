import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzx")
export default class LzxController {
  @operation({
    summary: "Get Lzx",
  })
  @get()
  static getLzx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzx",
  })
  @post("{id}")
  static createLzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
