import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzc")
export default class LzcController {
  @operation({
    summary: "Get Lzc",
  })
  @get()
  static getLzc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzc",
  })
  @post("{id}")
  static createLzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
