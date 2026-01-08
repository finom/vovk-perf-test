import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npn")
export default class NpnController {
  @operation({
    summary: "Get Npn",
  })
  @get()
  static getNpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npn",
  })
  @post("{id}")
  static createNpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
