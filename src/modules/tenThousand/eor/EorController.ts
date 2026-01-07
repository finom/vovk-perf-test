import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eor")
export default class EorController {
  @operation({
    summary: "Get Eor",
  })
  @get()
  static getEor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eor",
  })
  @post("{id}")
  static createEor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
