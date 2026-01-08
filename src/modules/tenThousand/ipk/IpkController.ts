import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipk")
export default class IpkController {
  @operation({
    summary: "Get Ipk",
  })
  @get()
  static getIpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipk",
  })
  @post("{id}")
  static createIpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
