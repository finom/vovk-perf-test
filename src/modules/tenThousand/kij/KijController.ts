import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kijs")
export default class KijController {
  @operation({
    summary: "Get Kijs",
  })
  @get()
  static getKijs = procedure({
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
