import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atcs")
export default class AtcController {
  @operation({
    summary: "Get Atcs",
  })
  @get()
  static getAtcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atc",
  })
  @post("{id}")
  static createAtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
