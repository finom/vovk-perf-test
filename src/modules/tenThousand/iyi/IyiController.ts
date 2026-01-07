import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyi")
export default class IyiController {
  @operation({
    summary: "Get Iyi",
  })
  @get()
  static getIyi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyi",
  })
  @post("{id}")
  static createIyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
