import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjr")
export default class GjrController {
  @operation({
    summary: "Get Gjr",
  })
  @get()
  static getGjr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjr",
  })
  @post("{id}")
  static createGjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
