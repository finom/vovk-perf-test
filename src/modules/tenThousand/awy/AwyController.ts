import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awies")
export default class AwyController {
  @operation({
    summary: "Get Awies",
  })
  @get()
  static getAwies = procedure({
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
