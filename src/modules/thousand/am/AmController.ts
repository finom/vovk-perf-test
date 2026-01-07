import { procedure, prefix, get, post, operation } from "vovk";

@prefix("am")
export default class AmController {
  @operation({
    summary: "Get Am",
  })
  @get()
  static getAm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Am",
  })
  @post("{id}")
  static createAm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
