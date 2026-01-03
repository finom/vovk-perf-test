import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hems")
export default class HemController {
  @operation({
    summary: "Get Hems",
  })
  @get()
  static getHems = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hem",
  })
  @post("{id}")
  static createHem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
