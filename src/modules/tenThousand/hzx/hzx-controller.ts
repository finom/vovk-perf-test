import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzx")
export default class HzxController {
  @operation({
    summary: "Get Hzx",
  })
  @get()
  static getHzx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzx",
  })
  @post("{id}")
  static createHzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
