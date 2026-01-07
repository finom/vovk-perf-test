import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knf")
export default class KnfController {
  @operation({
    summary: "Get Knf",
  })
  @get()
  static getKnf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knf",
  })
  @post("{id}")
  static createKnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
