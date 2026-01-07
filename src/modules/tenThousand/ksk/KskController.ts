import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksk")
export default class KskController {
  @operation({
    summary: "Get Ksk",
  })
  @get()
  static getKsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksk",
  })
  @post("{id}")
  static createKsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
