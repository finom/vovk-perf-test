import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bols")
export default class BolController {
  @operation({
    summary: "Get Bols",
  })
  @get()
  static getBols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bol",
  })
  @post("{id}")
  static createBol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
