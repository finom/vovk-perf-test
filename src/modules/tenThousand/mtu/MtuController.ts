import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtu")
export default class MtuController {
  @operation({
    summary: "Get Mtu",
  })
  @get()
  static getMtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtu",
  })
  @post("{id}")
  static createMtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
