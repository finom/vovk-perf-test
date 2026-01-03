import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cehs")
export default class CehController {
  @operation({
    summary: "Get Cehs",
  })
  @get()
  static getCehs = procedure({
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
