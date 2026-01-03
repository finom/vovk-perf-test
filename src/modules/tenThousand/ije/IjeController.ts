import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijes")
export default class IjeController {
  @operation({
    summary: "Get Ijes",
  })
  @get()
  static getIjes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ije",
  })
  @post("{id}")
  static createIje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
