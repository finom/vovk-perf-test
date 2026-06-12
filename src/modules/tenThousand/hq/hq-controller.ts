import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hq")
export default class HqController {
  @operation({
    summary: "Get Hq",
  })
  @get()
  static getHq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hq",
  })
  @post("{id}")
  static createHq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
