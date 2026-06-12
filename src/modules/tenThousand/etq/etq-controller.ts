import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etq")
export default class EtqController {
  @operation({
    summary: "Get Etq",
  })
  @get()
  static getEtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etq",
  })
  @post("{id}")
  static createEtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
