import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gim")
export default class GimController {
  @operation({
    summary: "Get Gim",
  })
  @get()
  static getGim = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gim",
  })
  @post("{id}")
  static createGim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
