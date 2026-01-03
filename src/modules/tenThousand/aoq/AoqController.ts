import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoqs")
export default class AoqController {
  @operation({
    summary: "Get Aoqs",
  })
  @get()
  static getAoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoq",
  })
  @post("{id}")
  static createAoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
