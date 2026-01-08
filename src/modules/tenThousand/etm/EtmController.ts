import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etm")
export default class EtmController {
  @operation({
    summary: "Get Etm",
  })
  @get()
  static getEtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etm",
  })
  @post("{id}")
  static createEtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
