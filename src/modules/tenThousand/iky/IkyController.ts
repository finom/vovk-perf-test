import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iky")
export default class IkyController {
  @operation({
    summary: "Get Iky",
  })
  @get()
  static getIky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iky",
  })
  @post("{id}")
  static createIky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
