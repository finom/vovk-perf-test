import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrd")
export default class HrdController {
  @operation({
    summary: "Get Hrd",
  })
  @get()
  static getHrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrd",
  })
  @post("{id}")
  static createHrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
