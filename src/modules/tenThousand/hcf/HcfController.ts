import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcf")
export default class HcfController {
  @operation({
    summary: "Get Hcf",
  })
  @get()
  static getHcf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hcf",
  })
  @post("{id}")
  static createHcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
