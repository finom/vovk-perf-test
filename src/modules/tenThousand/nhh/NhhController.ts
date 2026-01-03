import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhhs")
export default class NhhController {
  @operation({
    summary: "Get Nhhs",
  })
  @get()
  static getNhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhh",
  })
  @post("{id}")
  static createNhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
