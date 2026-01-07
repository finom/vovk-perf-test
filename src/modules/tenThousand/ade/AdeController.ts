import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ade")
export default class AdeController {
  @operation({
    summary: "Get Ade",
  })
  @get()
  static getAde = procedure({
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
