import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irus")
export default class IruController {
  @operation({
    summary: "Get Irus",
  })
  @get()
  static getIrus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iru",
  })
  @post("{id}")
  static createIru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
