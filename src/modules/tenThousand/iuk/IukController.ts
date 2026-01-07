import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuk")
export default class IukController {
  @operation({
    summary: "Get Iuk",
  })
  @get()
  static getIuk = procedure({
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
