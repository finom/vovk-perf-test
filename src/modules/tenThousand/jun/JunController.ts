import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jun")
export default class JunController {
  @operation({
    summary: "Get Jun",
  })
  @get()
  static getJun = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jun",
  })
  @post("{id}")
  static createJun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
