import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipb")
export default class IpbController {
  @operation({
    summary: "Get Ipb",
  })
  @get()
  static getIpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipb",
  })
  @post("{id}")
  static createIpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
