import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enhs")
export default class EnhController {
  @operation({
    summary: "Get Enhs",
  })
  @get()
  static getEnhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enh",
  })
  @post("{id}")
  static createEnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
