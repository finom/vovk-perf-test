import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nev")
export default class NevController {
  @operation({
    summary: "Get Nev",
  })
  @get()
  static getNev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nev",
  })
  @post("{id}")
  static createNev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
