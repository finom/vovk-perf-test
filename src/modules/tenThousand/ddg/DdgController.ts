import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddg")
export default class DdgController {
  @operation({
    summary: "Get Ddg",
  })
  @get()
  static getDdg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddg",
  })
  @post("{id}")
  static createDdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
