import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzl")
export default class LzlController {
  @operation({
    summary: "Get Lzl",
  })
  @get()
  static getLzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzl",
  })
  @post("{id}")
  static createLzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
