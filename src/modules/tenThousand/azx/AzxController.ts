import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azxes")
export default class AzxController {
  @operation({
    summary: "Get Azxes",
  })
  @get()
  static getAzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azx",
  })
  @post("{id}")
  static createAzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
