import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcq")
export default class HcqController {
  @operation({
    summary: "Get Hcq",
  })
  @get()
  static getHcq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hcq",
  })
  @post("{id}")
  static createHcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
