import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atp")
export default class AtpController {
  @operation({
    summary: "Get Atp",
  })
  @get()
  static getAtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atp",
  })
  @post("{id}")
  static createAtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
