import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ial")
export default class IalController {
  @operation({
    summary: "Get Ial",
  })
  @get()
  static getIal = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ial",
  })
  @post("{id}")
  static createIal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
