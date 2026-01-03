import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivis")
export default class IviController {
  @operation({
    summary: "Get Ivis",
  })
  @get()
  static getIvis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivi",
  })
  @post("{id}")
  static createIvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
