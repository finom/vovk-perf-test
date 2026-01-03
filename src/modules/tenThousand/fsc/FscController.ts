import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fscs")
export default class FscController {
  @operation({
    summary: "Get Fscs",
  })
  @get()
  static getFscs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsc",
  })
  @post("{id}")
  static createFsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
