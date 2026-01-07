import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dde")
export default class DdeController {
  @operation({
    summary: "Get Dde",
  })
  @get()
  static getDde = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dde",
  })
  @post("{id}")
  static createDde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
