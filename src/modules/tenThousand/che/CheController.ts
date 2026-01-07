import { procedure, prefix, get, post, operation } from "vovk";

@prefix("che")
export default class CheController {
  @operation({
    summary: "Get Che",
  })
  @get()
  static getChe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Che",
  })
  @post("{id}")
  static createChe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
