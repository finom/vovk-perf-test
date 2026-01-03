import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egcs")
export default class EgcController {
  @operation({
    summary: "Get Egcs",
  })
  @get()
  static getEgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egc",
  })
  @post("{id}")
  static createEgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
