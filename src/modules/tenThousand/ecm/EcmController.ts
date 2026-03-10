import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecm")
export default class EcmController {
  @operation({
    summary: "Get Ecm",
  })
  @get()
  static getEcm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecm",
  })
  @post("{id}")
  static createEcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
