import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etc")
export default class EtcController {
  @operation({
    summary: "Get Etc",
  })
  @get()
  static getEtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etc",
  })
  @post("{id}")
  static createEtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
