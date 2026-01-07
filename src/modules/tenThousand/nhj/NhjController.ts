import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhj")
export default class NhjController {
  @operation({
    summary: "Get Nhj",
  })
  @get()
  static getNhj = procedure({
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
