import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iui")
export default class IuiController {
  @operation({
    summary: "Get Iui",
  })
  @get()
  static getIui = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iui",
  })
  @post("{id}")
  static createIui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
