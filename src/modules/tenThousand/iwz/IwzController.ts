import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwzs")
export default class IwzController {
  @operation({
    summary: "Get Iwzs",
  })
  @get()
  static getIwzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwz",
  })
  @post("{id}")
  static createIwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
