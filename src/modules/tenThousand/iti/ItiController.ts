import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iti")
export default class ItiController {
  @operation({
    summary: "Get Iti",
  })
  @get()
  static getIti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iti",
  })
  @post("{id}")
  static createIti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
