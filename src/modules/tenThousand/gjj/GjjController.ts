import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjjs")
export default class GjjController {
  @operation({
    summary: "Get Gjjs",
  })
  @get()
  static getGjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjj",
  })
  @post("{id}")
  static createGjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
