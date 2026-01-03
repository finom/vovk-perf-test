import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dozs")
export default class DozController {
  @operation({
    summary: "Get Dozs",
  })
  @get()
  static getDozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doz",
  })
  @post("{id}")
  static createDoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
