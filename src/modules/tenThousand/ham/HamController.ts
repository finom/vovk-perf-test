import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ham")
export default class HamController {
  @operation({
    summary: "Get Ham",
  })
  @get()
  static getHam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ham",
  })
  @post("{id}")
  static createHam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
