import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihn")
export default class IhnController {
  @operation({
    summary: "Get Ihn",
  })
  @get()
  static getIhn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihn",
  })
  @post("{id}")
  static createIhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
