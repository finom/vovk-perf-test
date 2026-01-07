import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgb")
export default class CgbController {
  @operation({
    summary: "Get Cgb",
  })
  @get()
  static getCgb = procedure({
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
