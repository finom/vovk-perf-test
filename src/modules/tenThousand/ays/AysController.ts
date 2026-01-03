import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ays")
export default class AysController {
  @operation({
    summary: "Get Ays",
  })
  @get()
  static getAys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ays",
  })
  @post("{id}")
  static createAys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
