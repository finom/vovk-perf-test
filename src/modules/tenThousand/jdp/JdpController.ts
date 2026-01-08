import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdp")
export default class JdpController {
  @operation({
    summary: "Get Jdp",
  })
  @get()
  static getJdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdp",
  })
  @post("{id}")
  static createJdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
