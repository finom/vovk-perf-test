import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naps")
export default class NapController {
  @operation({
    summary: "Get Naps",
  })
  @get()
  static getNaps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nap",
  })
  @post("{id}")
  static createNap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
