import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdp")
export default class KdpController {
  @operation({
    summary: "Get Kdp",
  })
  @get()
  static getKdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdp",
  })
  @post("{id}")
  static createKdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
