import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhes")
export default class NheController {
  @operation({
    summary: "Get Nhes",
  })
  @get()
  static getNhes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhe",
  })
  @post("{id}")
  static createNhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
