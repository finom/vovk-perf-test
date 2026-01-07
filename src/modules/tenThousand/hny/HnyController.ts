import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hny")
export default class HnyController {
  @operation({
    summary: "Get Hny",
  })
  @get()
  static getHny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hny",
  })
  @post("{id}")
  static createHny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
