import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iujs")
export default class IujController {
  @operation({
    summary: "Get Iujs",
  })
  @get()
  static getIujs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuj",
  })
  @post("{id}")
  static createIuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
