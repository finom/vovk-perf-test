import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgbs")
export default class CgbController {
  @operation({
    summary: "Get Cgbs",
  })
  @get()
  static getCgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgb",
  })
  @post("{id}")
  static createCgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
