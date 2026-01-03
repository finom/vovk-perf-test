import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifgs")
export default class IfgController {
  @operation({
    summary: "Get Ifgs",
  })
  @get()
  static getIfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifg",
  })
  @post("{id}")
  static createIfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
