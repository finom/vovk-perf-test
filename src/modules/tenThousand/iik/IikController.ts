import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiks")
export default class IikController {
  @operation({
    summary: "Get Iiks",
  })
  @get()
  static getIiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iik",
  })
  @post("{id}")
  static createIik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
