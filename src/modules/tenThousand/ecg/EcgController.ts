import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecg")
export default class EcgController {
  @operation({
    summary: "Get Ecg",
  })
  @get()
  static getEcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecg",
  })
  @post("{id}")
  static createEcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
