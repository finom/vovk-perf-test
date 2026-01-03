import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsses")
export default class FssController {
  @operation({
    summary: "Get Fsses",
  })
  @get()
  static getFsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fss",
  })
  @post("{id}")
  static createFss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
