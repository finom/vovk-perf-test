import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzl")
export default class HzlController {
  @operation({
    summary: "Get Hzl",
  })
  @get()
  static getHzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzl",
  })
  @post("{id}")
  static createHzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
