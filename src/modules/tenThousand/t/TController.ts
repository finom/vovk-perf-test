import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ts")
export default class TController {
  @operation({
    summary: "Get TS",
  })
  @get()
  static getTS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create T",
  })
  @post("{id}")
  static createT = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
