import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kav")
export default class KavController {
  @operation({
    summary: "Get Kav",
  })
  @get()
  static getKav = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kav",
  })
  @post("{id}")
  static createKav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
