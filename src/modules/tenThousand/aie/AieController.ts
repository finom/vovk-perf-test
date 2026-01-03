import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aies")
export default class AieController {
  @operation({
    summary: "Get Aies",
  })
  @get()
  static getAies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aie",
  })
  @post("{id}")
  static createAie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
