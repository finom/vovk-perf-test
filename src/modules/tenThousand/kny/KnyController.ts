import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kny")
export default class KnyController {
  @operation({
    summary: "Get Kny",
  })
  @get()
  static getKny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kny",
  })
  @post("{id}")
  static createKny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
