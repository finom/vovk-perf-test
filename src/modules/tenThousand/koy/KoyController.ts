import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koy")
export default class KoyController {
  @operation({
    summary: "Get Koy",
  })
  @get()
  static getKoy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koy",
  })
  @post("{id}")
  static createKoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
