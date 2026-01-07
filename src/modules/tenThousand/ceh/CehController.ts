import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceh")
export default class CehController {
  @operation({
    summary: "Get Ceh",
  })
  @get()
  static getCeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ceh",
  })
  @post("{id}")
  static createCeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
