import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxies")
export default class KxyController {
  @operation({
    summary: "Get Kxies",
  })
  @get()
  static getKxies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxy",
  })
  @post("{id}")
  static createKxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
