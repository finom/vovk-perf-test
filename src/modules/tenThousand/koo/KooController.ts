import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koo")
export default class KooController {
  @operation({
    summary: "Get Koo",
  })
  @get()
  static getKoo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koo",
  })
  @post("{id}")
  static createKoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
