import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etl")
export default class EtlController {
  @operation({
    summary: "Get Etl",
  })
  @get()
  static getEtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etl",
  })
  @post("{id}")
  static createEtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
