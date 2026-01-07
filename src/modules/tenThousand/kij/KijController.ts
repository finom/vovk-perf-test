import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kij")
export default class KijController {
  @operation({
    summary: "Get Kij",
  })
  @get()
  static getKij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kij",
  })
  @post("{id}")
  static createKij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
