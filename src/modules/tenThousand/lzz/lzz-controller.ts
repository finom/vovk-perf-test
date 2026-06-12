import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzz")
export default class LzzController {
  @operation({
    summary: "Get Lzz",
  })
  @get()
  static getLzz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzz",
  })
  @post("{id}")
  static createLzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
