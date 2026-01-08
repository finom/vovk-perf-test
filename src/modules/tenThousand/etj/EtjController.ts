import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etj")
export default class EtjController {
  @operation({
    summary: "Get Etj",
  })
  @get()
  static getEtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etj",
  })
  @post("{id}")
  static createEtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
