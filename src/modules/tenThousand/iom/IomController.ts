import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioms")
export default class IomController {
  @operation({
    summary: "Get Ioms",
  })
  @get()
  static getIoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iom",
  })
  @post("{id}")
  static createIom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
