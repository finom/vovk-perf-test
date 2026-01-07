import { procedure, prefix, get, post, operation } from "vovk";

@prefix("i")
export default class IController {
  @operation({
    summary: "Get I",
  })
  @get()
  static getI = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create I",
  })
  @post("{id}")
  static createI = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
