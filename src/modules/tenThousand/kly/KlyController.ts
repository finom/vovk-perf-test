import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kly")
export default class KlyController {
  @operation({
    summary: "Get Kly",
  })
  @get()
  static getKly = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kly",
  })
  @post("{id}")
  static createKly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
