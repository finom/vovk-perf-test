import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cul")
export default class CulController {
  @operation({
    summary: "Get Cul",
  })
  @get()
  static getCul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cul",
  })
  @post("{id}")
  static createCul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
