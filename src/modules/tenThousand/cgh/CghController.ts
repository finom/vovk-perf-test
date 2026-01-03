import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cghs")
export default class CghController {
  @operation({
    summary: "Get Cghs",
  })
  @get()
  static getCghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgh",
  })
  @post("{id}")
  static createCgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
