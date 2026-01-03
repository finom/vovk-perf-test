import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpos")
export default class KpoController {
  @operation({
    summary: "Get Kpos",
  })
  @get()
  static getKpos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpo",
  })
  @post("{id}")
  static createKpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
