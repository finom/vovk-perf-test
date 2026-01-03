import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddgs")
export default class DdgController {
  @operation({
    summary: "Get Ddgs",
  })
  @get()
  static getDdgs = procedure({
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
