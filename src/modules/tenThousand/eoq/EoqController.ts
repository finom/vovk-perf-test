import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoqs")
export default class EoqController {
  @operation({
    summary: "Get Eoqs",
  })
  @get()
  static getEoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoq",
  })
  @post("{id}")
  static createEoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
