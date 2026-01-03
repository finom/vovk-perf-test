import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knxes")
export default class KnxController {
  @operation({
    summary: "Get Knxes",
  })
  @get()
  static getKnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knx",
  })
  @post("{id}")
  static createKnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
