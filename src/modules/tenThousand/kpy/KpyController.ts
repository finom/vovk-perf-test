import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpy")
export default class KpyController {
  @operation({
    summary: "Get Kpy",
  })
  @get()
  static getKpy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpy",
  })
  @post("{id}")
  static createKpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
