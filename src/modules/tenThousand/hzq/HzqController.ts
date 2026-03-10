import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzq")
export default class HzqController {
  @operation({
    summary: "Get Hzq",
  })
  @get()
  static getHzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzq",
  })
  @post("{id}")
  static createHzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
