import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmp")
export default class HmpController {
  @operation({
    summary: "Get Hmp",
  })
  @get()
  static getHmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmp",
  })
  @post("{id}")
  static createHmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
