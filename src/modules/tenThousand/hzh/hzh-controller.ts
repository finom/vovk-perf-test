import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzh")
export default class HzhController {
  @operation({
    summary: "Get Hzh",
  })
  @get()
  static getHzh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzh",
  })
  @post("{id}")
  static createHzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
