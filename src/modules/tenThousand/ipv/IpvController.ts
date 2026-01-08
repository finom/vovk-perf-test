import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipv")
export default class IpvController {
  @operation({
    summary: "Get Ipv",
  })
  @get()
  static getIpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipv",
  })
  @post("{id}")
  static createIpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
