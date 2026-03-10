import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzj")
export default class LzjController {
  @operation({
    summary: "Get Lzj",
  })
  @get()
  static getLzj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzj",
  })
  @post("{id}")
  static createLzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
