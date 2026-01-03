import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kigs")
export default class KigController {
  @operation({
    summary: "Get Kigs",
  })
  @get()
  static getKigs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kig",
  })
  @post("{id}")
  static createKig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
