import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgcs")
export default class FgcController {
  @operation({
    summary: "Get Fgcs",
  })
  @get()
  static getFgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgc",
  })
  @post("{id}")
  static createFgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
