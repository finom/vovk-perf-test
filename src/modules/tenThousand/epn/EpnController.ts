import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epn")
export default class EpnController {
  @operation({
    summary: "Get Epn",
  })
  @get()
  static getEpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epn",
  })
  @post("{id}")
  static createEpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
