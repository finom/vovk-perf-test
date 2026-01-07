import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mco")
export default class McoController {
  @operation({
    summary: "Get Mco",
  })
  @get()
  static getMco = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mco",
  })
  @post("{id}")
  static createMco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
