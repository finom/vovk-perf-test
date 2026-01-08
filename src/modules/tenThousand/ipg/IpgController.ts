import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipg")
export default class IpgController {
  @operation({
    summary: "Get Ipg",
  })
  @get()
  static getIpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipg",
  })
  @post("{id}")
  static createIpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
