import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrg")
export default class MrgController {
  @operation({
    summary: "Get Mrg",
  })
  @get()
  static getMrg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrg",
  })
  @post("{id}")
  static createMrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
