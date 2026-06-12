import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpp")
export default class BppController {
  @operation({
    summary: "Get Bpp",
  })
  @get()
  static getBpp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpp",
  })
  @post("{id}")
  static createBpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
