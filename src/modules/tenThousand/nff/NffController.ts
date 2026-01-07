import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nff")
export default class NffController {
  @operation({
    summary: "Get Nff",
  })
  @get()
  static getNff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nff",
  })
  @post("{id}")
  static createNff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
