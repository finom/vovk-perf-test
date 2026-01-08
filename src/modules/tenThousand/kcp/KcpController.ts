import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcp")
export default class KcpController {
  @operation({
    summary: "Get Kcp",
  })
  @get()
  static getKcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcp",
  })
  @post("{id}")
  static createKcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
