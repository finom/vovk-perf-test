import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzr")
export default class LzrController {
  @operation({
    summary: "Get Lzr",
  })
  @get()
  static getLzr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzr",
  })
  @post("{id}")
  static createLzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
