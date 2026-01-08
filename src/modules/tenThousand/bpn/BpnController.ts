import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpn")
export default class BpnController {
  @operation({
    summary: "Get Bpn",
  })
  @get()
  static getBpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpn",
  })
  @post("{id}")
  static createBpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
