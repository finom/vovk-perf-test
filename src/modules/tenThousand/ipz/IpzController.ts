import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipz")
export default class IpzController {
  @operation({
    summary: "Get Ipz",
  })
  @get()
  static getIpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipz",
  })
  @post("{id}")
  static createIpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
