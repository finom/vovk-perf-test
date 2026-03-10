import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etf")
export default class EtfController {
  @operation({
    summary: "Get Etf",
  })
  @get()
  static getEtf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etf",
  })
  @post("{id}")
  static createEtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
