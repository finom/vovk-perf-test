import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gc")
export default class GcController {
  @operation({
    summary: "Get Gc",
  })
  @get()
  static getGc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gc",
  })
  @post("{id}")
  static createGc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
