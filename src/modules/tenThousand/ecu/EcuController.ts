import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecu")
export default class EcuController {
  @operation({
    summary: "Get Ecu",
  })
  @get()
  static getEcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecu",
  })
  @post("{id}")
  static createEcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
