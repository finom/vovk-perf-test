import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiys")
export default class IiyController {
  @operation({
    summary: "Get Iiys",
  })
  @get()
  static getIiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iiy",
  })
  @post("{id}")
  static createIiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
