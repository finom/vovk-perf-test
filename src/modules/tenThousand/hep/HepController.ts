import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hep")
export default class HepController {
  @operation({
    summary: "Get Hep",
  })
  @get()
  static getHep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hep",
  })
  @post("{id}")
  static createHep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
