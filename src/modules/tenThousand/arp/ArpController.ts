import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arp")
export default class ArpController {
  @operation({
    summary: "Get Arp",
  })
  @get()
  static getArp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arp",
  })
  @post("{id}")
  static createArp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
