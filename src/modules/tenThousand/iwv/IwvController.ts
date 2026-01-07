import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwv")
export default class IwvController {
  @operation({
    summary: "Get Iwv",
  })
  @get()
  static getIwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwv",
  })
  @post("{id}")
  static createIwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
