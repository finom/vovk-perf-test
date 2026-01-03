import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iles")
export default class IleController {
  @operation({
    summary: "Get Iles",
  })
  @get()
  static getIles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ile",
  })
  @post("{id}")
  static createIle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
