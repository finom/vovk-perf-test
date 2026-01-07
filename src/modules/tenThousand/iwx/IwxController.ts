import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwx")
export default class IwxController {
  @operation({
    summary: "Get Iwx",
  })
  @get()
  static getIwx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwx",
  })
  @post("{id}")
  static createIwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
