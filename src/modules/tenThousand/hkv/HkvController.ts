import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkv")
export default class HkvController {
  @operation({
    summary: "Get Hkv",
  })
  @get()
  static getHkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkv",
  })
  @post("{id}")
  static createHkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
