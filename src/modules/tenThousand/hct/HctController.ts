import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hct")
export default class HctController {
  @operation({
    summary: "Get Hct",
  })
  @get()
  static getHct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hct",
  })
  @post("{id}")
  static createHct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
