import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgus")
export default class KguController {
  @operation({
    summary: "Get Kgus",
  })
  @get()
  static getKgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgu",
  })
  @post("{id}")
  static createKgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
