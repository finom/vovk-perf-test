import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daxes")
export default class DaxController {
  @operation({
    summary: "Get Daxes",
  })
  @get()
  static getDaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dax",
  })
  @post("{id}")
  static createDax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
