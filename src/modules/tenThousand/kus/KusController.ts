import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuses")
export default class KusController {
  @operation({
    summary: "Get Kuses",
  })
  @get()
  static getKuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kus",
  })
  @post("{id}")
  static createKus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
