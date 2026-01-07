import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlo")
export default class HloController {
  @operation({
    summary: "Get Hlo",
  })
  @get()
  static getHlo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlo",
  })
  @post("{id}")
  static createHlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
