import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axies")
export default class AxyController {
  @operation({
    summary: "Get Axies",
  })
  @get()
  static getAxies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axy",
  })
  @post("{id}")
  static createAxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
