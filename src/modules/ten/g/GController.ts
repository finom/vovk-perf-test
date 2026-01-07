import { procedure, prefix, get, post, operation } from "vovk";

@prefix("g")
export default class GController {
  @operation({
    summary: "Get G",
  })
  @get()
  static getG = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create G",
  })
  @post("{id}")
  static createG = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
