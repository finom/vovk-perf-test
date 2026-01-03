import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nris")
export default class NriController {
  @operation({
    summary: "Get Nris",
  })
  @get()
  static getNris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nri",
  })
  @post("{id}")
  static createNri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
