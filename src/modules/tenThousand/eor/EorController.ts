import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eors")
export default class EorController {
  @operation({
    summary: "Get Eors",
  })
  @get()
  static getEors = procedure({
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
