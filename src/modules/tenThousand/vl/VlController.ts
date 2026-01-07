import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vl")
export default class VlController {
  @operation({
    summary: "Get Vl",
  })
  @get()
  static getVl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vl",
  })
  @post("{id}")
  static createVl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
