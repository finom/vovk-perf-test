import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrd")
export default class NrdController {
  @operation({
    summary: "Get Nrd",
  })
  @get()
  static getNrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrd",
  })
  @post("{id}")
  static createNrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
