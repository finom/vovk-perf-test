import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecn")
export default class EcnController {
  @operation({
    summary: "Get Ecn",
  })
  @get()
  static getEcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecn",
  })
  @post("{id}")
  static createEcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
