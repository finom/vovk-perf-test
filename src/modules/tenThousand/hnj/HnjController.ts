import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnjs")
export default class HnjController {
  @operation({
    summary: "Get Hnjs",
  })
  @get()
  static getHnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnj",
  })
  @post("{id}")
  static createHnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
