import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kon")
export default class KonController {
  @operation({
    summary: "Get Kon",
  })
  @get()
  static getKon = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kon",
  })
  @post("{id}")
  static createKon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
