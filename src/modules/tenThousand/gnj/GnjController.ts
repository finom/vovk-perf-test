import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnjs")
export default class GnjController {
  @operation({
    summary: "Get Gnjs",
  })
  @get()
  static getGnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnj",
  })
  @post("{id}")
  static createGnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
