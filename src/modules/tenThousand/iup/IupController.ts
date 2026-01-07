import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iup")
export default class IupController {
  @operation({
    summary: "Get Iup",
  })
  @get()
  static getIup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iup",
  })
  @post("{id}")
  static createIup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
