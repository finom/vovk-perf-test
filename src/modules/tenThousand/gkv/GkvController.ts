import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkv")
export default class GkvController {
  @operation({
    summary: "Get Gkv",
  })
  @get()
  static getGkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gkv",
  })
  @post("{id}")
  static createGkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
