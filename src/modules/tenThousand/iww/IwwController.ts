import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iww")
export default class IwwController {
  @operation({
    summary: "Get Iww",
  })
  @get()
  static getIww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iww",
  })
  @post("{id}")
  static createIww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
