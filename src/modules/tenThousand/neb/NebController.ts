import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nebs")
export default class NebController {
  @operation({
    summary: "Get Nebs",
  })
  @get()
  static getNebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neb",
  })
  @post("{id}")
  static createNeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
