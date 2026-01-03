import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhqs")
export default class DhqController {
  @operation({
    summary: "Get Dhqs",
  })
  @get()
  static getDhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhq",
  })
  @post("{id}")
  static createDhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
