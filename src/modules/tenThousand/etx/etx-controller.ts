import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etx")
export default class EtxController {
  @operation({
    summary: "Get Etx",
  })
  @get()
  static getEtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etx",
  })
  @post("{id}")
  static createEtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
