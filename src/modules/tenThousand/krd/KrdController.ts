import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krd")
export default class KrdController {
  @operation({
    summary: "Get Krd",
  })
  @get()
  static getKrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krd",
  })
  @post("{id}")
  static createKrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
