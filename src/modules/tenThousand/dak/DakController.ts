import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dak")
export default class DakController {
  @operation({
    summary: "Get Dak",
  })
  @get()
  static getDak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dak",
  })
  @post("{id}")
  static createDak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
