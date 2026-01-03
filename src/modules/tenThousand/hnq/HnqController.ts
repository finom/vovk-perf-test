import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnqs")
export default class HnqController {
  @operation({
    summary: "Get Hnqs",
  })
  @get()
  static getHnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnq",
  })
  @post("{id}")
  static createHnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
