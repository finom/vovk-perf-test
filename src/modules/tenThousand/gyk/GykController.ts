import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyks")
export default class GykController {
  @operation({
    summary: "Get Gyks",
  })
  @get()
  static getGyks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyk",
  })
  @post("{id}")
  static createGyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
