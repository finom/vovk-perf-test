import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwu")
export default class IwuController {
  @operation({
    summary: "Get Iwu",
  })
  @get()
  static getIwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwu",
  })
  @post("{id}")
  static createIwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
