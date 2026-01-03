import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blns")
export default class BlnController {
  @operation({
    summary: "Get Blns",
  })
  @get()
  static getBlns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bln",
  })
  @post("{id}")
  static createBln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
