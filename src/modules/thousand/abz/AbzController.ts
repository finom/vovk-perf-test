import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abzs")
export default class AbzController {
  @operation({
    summary: "Get Abzs",
  })
  @get()
  static getAbzs = procedure({
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
