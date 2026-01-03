import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awos")
export default class AwoController {
  @operation({
    summary: "Get Awos",
  })
  @get()
  static getAwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awo",
  })
  @post("{id}")
  static createAwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
