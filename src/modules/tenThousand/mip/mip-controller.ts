import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mip")
export default class MipController {
  @operation({
    summary: "Get Mip",
  })
  @get()
  static getMip = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mip",
  })
  @post("{id}")
  static createMip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
