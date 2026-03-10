import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzd")
export default class LzdController {
  @operation({
    summary: "Get Lzd",
  })
  @get()
  static getLzd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzd",
  })
  @post("{id}")
  static createLzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
