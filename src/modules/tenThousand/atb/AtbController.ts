import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atb")
export default class AtbController {
  @operation({
    summary: "Get Atb",
  })
  @get()
  static getAtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atb",
  })
  @post("{id}")
  static createAtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
