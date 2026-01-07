import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atc")
export default class AtcController {
  @operation({
    summary: "Get Atc",
  })
  @get()
  static getAtc = procedure({
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
