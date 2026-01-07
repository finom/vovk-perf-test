import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dov")
export default class DovController {
  @operation({
    summary: "Get Dov",
  })
  @get()
  static getDov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dov",
  })
  @post("{id}")
  static createDov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
