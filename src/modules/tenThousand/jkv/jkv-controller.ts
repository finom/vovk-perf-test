import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkv")
export default class JkvController {
  @operation({
    summary: "Get Jkv",
  })
  @get()
  static getJkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkv",
  })
  @post("{id}")
  static createJkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
