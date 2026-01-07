import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abz")
export default class AbzController {
  @operation({
    summary: "Get Abz",
  })
  @get()
  static getAbz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abz",
  })
  @post("{id}")
  static createAbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
