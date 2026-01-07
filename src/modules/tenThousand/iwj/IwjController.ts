import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwj")
export default class IwjController {
  @operation({
    summary: "Get Iwj",
  })
  @get()
  static getIwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwj",
  })
  @post("{id}")
  static createIwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
