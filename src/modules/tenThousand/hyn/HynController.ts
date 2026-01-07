import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyn")
export default class HynController {
  @operation({
    summary: "Get Hyn",
  })
  @get()
  static getHyn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyn",
  })
  @post("{id}")
  static createHyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
