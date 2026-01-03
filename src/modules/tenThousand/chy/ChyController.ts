import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chies")
export default class ChyController {
  @operation({
    summary: "Get Chies",
  })
  @get()
  static getChies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chy",
  })
  @post("{id}")
  static createChy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
