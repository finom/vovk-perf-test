import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arp")
export default class ArpController {
  @operation({
    summary: "Get Arp",
  })
  @get()
  static getArp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arp",
  })
  @post("{id}")
  static createArp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
