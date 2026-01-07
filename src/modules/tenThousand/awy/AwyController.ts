import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awy")
export default class AwyController {
  @operation({
    summary: "Get Awy",
  })
  @get()
  static getAwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awy",
  })
  @post("{id}")
  static createAwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
