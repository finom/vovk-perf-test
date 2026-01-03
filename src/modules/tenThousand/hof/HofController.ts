import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hofs")
export default class HofController {
  @operation({
    summary: "Get Hofs",
  })
  @get()
  static getHofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hof",
  })
  @post("{id}")
  static createHof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
