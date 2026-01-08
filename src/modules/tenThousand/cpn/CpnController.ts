import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpn")
export default class CpnController {
  @operation({
    summary: "Get Cpn",
  })
  @get()
  static getCpn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpn",
  })
  @post("{id}")
  static createCpn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
