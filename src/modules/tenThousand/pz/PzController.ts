import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pz")
export default class PzController {
  @operation({
    summary: "Get Pz",
  })
  @get()
  static getPz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pz",
  })
  @post("{id}")
  static createPz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
