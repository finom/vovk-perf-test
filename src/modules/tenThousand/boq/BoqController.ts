import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boqs")
export default class BoqController {
  @operation({
    summary: "Get Boqs",
  })
  @get()
  static getBoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boq",
  })
  @post("{id}")
  static createBoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
