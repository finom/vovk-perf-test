import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alz")
export default class AlzController {
  @operation({
    summary: "Get Alz",
  })
  @get()
  static getAlz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alz",
  })
  @post("{id}")
  static createAlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
