import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
