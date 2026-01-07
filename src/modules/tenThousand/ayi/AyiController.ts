import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayi")
export default class AyiController {
  @operation({
    summary: "Get Ayi",
  })
  @get()
  static getAyi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayi",
  })
  @post("{id}")
  static createAyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
