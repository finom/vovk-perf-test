import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuks")
export default class IukController {
  @operation({
    summary: "Get Iuks",
  })
  @get()
  static getIuks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuk",
  })
  @post("{id}")
  static createIuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
