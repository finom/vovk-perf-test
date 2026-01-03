import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heps")
export default class HepController {
  @operation({
    summary: "Get Heps",
  })
  @get()
  static getHeps = procedure({
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
