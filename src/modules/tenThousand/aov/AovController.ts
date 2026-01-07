import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aov")
export default class AovController {
  @operation({
    summary: "Get Aov",
  })
  @get()
  static getAov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aov",
  })
  @post("{id}")
  static createAov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
