import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhh")
export default class NhhController {
  @operation({
    summary: "Get Nhh",
  })
  @get()
  static getNhh = procedure({
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
