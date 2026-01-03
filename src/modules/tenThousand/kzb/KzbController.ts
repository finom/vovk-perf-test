import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzbs")
export default class KzbController {
  @operation({
    summary: "Get Kzbs",
  })
  @get()
  static getKzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzb",
  })
  @post("{id}")
  static createKzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
