import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgg")
export default class HggController {
  @operation({
    summary: "Get Hgg",
  })
  @get()
  static getHgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgg",
  })
  @post("{id}")
  static createHgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
