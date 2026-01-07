import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntk")
export default class NtkController {
  @operation({
    summary: "Get Ntk",
  })
  @get()
  static getNtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntk",
  })
  @post("{id}")
  static createNtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
