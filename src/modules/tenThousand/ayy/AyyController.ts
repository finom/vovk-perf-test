import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayys")
export default class AyyController {
  @operation({
    summary: "Get Ayys",
  })
  @get()
  static getAyys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayy",
  })
  @post("{id}")
  static createAyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
