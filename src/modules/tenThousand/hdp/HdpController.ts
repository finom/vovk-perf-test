import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdp")
export default class HdpController {
  @operation({
    summary: "Get Hdp",
  })
  @get()
  static getHdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdp",
  })
  @post("{id}")
  static createHdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
