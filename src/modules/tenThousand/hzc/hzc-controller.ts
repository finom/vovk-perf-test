import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzc")
export default class HzcController {
  @operation({
    summary: "Get Hzc",
  })
  @get()
  static getHzc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzc",
  })
  @post("{id}")
  static createHzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
