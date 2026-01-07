import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icz")
export default class IczController {
  @operation({
    summary: "Get Icz",
  })
  @get()
  static getIcz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icz",
  })
  @post("{id}")
  static createIcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
