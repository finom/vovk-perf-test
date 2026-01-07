import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goz")
export default class GozController {
  @operation({
    summary: "Get Goz",
  })
  @get()
  static getGoz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goz",
  })
  @post("{id}")
  static createGoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
