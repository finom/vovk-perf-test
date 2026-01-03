import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vis")
export default class ViController {
  @operation({
    summary: "Get Vis",
  })
  @get()
  static getVis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vi",
  })
  @post("{id}")
  static createVi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
