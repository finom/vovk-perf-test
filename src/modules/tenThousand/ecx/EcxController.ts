import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecx")
export default class EcxController {
  @operation({
    summary: "Get Ecx",
  })
  @get()
  static getEcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecx",
  })
  @post("{id}")
  static createEcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
