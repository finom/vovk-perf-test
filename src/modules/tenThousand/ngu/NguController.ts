import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngu")
export default class NguController {
  @operation({
    summary: "Get Ngu",
  })
  @get()
  static getNgu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngu",
  })
  @post("{id}")
  static createNgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
