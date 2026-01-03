import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iors")
export default class IorController {
  @operation({
    summary: "Get Iors",
  })
  @get()
  static getIors = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ior",
  })
  @post("{id}")
  static createIor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
