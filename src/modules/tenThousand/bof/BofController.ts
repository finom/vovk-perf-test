import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bof")
export default class BofController {
  @operation({
    summary: "Get Bof",
  })
  @get()
  static getBof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bof",
  })
  @post("{id}")
  static createBof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
