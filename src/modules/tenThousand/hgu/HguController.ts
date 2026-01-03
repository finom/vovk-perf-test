import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgus")
export default class HguController {
  @operation({
    summary: "Get Hgus",
  })
  @get()
  static getHgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgu",
  })
  @post("{id}")
  static createHgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
