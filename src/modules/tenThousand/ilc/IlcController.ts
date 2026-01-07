import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilc")
export default class IlcController {
  @operation({
    summary: "Get Ilc",
  })
  @get()
  static getIlc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilc",
  })
  @post("{id}")
  static createIlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
