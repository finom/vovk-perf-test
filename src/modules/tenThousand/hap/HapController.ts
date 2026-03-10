import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hap")
export default class HapController {
  @operation({
    summary: "Get Hap",
  })
  @get()
  static getHap = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hap",
  })
  @post("{id}")
  static createHap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
