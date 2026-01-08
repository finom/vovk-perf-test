import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etg")
export default class EtgController {
  @operation({
    summary: "Get Etg",
  })
  @get()
  static getEtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etg",
  })
  @post("{id}")
  static createEtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
