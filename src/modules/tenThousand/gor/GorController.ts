import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gor")
export default class GorController {
  @operation({
    summary: "Get Gor",
  })
  @get()
  static getGor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gor",
  })
  @post("{id}")
  static createGor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
