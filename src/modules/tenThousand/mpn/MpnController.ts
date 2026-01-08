import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpn")
export default class MpnController {
  @operation({
    summary: "Get Mpn",
  })
  @get()
  static getMpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpn",
  })
  @post("{id}")
  static createMpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
