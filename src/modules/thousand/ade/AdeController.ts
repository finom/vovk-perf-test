import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ades")
export default class AdeController {
  @operation({
    summary: "Get Ades",
  })
  @get()
  static getAdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ade",
  })
  @post("{id}")
  static createAde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
