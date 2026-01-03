import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhjs")
export default class NhjController {
  @operation({
    summary: "Get Nhjs",
  })
  @get()
  static getNhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhj",
  })
  @post("{id}")
  static createNhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
