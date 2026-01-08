import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ip")
export default class IpController {
  @operation({
    summary: "Get Ip",
  })
  @get()
  static getIp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ip",
  })
  @post("{id}")
  static createIp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
