import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knx")
export default class KnxController {
  @operation({
    summary: "Get Knx",
  })
  @get()
  static getKnx = procedure({
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
