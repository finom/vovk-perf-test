import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kehs")
export default class KehController {
  @operation({
    summary: "Get Kehs",
  })
  @get()
  static getKehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Keh",
  })
  @post("{id}")
  static createKeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
