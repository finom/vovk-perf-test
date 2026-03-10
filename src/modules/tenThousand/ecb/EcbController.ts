import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecb")
export default class EcbController {
  @operation({
    summary: "Get Ecb",
  })
  @get()
  static getEcb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecb",
  })
  @post("{id}")
  static createEcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
