import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwzs")
export default class KwzController {
  @operation({
    summary: "Get Kwzs",
  })
  @get()
  static getKwzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwz",
  })
  @post("{id}")
  static createKwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
