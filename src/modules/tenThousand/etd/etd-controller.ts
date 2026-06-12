import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etd")
export default class EtdController {
  @operation({
    summary: "Get Etd",
  })
  @get()
  static getEtd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etd",
  })
  @post("{id}")
  static createEtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
