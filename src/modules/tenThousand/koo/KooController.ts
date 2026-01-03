import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koos")
export default class KooController {
  @operation({
    summary: "Get Koos",
  })
  @get()
  static getKoos = procedure({
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
