import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deo")
export default class DeoController {
  @operation({
    summary: "Get Deo",
  })
  @get()
  static getDeo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Deo",
  })
  @post("{id}")
  static createDeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
