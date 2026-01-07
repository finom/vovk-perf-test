import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzu")
export default class DzuController {
  @operation({
    summary: "Get Dzu",
  })
  @get()
  static getDzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzu",
  })
  @post("{id}")
  static createDzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
