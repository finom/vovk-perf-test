import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpn")
export default class KpnController {
  @operation({
    summary: "Get Kpn",
  })
  @get()
  static getKpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpn",
  })
  @post("{id}")
  static createKpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
