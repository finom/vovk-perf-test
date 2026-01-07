import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghf")
export default class GhfController {
  @operation({
    summary: "Get Ghf",
  })
  @get()
  static getGhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghf",
  })
  @post("{id}")
  static createGhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
