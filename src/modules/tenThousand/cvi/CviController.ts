import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvi")
export default class CviController {
  @operation({
    summary: "Get Cvi",
  })
  @get()
  static getCvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvi",
  })
  @post("{id}")
  static createCvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
