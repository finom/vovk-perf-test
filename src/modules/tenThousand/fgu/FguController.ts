import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgus")
export default class FguController {
  @operation({
    summary: "Get Fgus",
  })
  @get()
  static getFgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgu",
  })
  @post("{id}")
  static createFgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
