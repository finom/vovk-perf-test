import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgs")
export default class FgsController {
  @operation({
    summary: "Get Fgs",
  })
  @get()
  static getFgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgs",
  })
  @post("{id}")
  static createFgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
