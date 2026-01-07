import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbz")
export default class HbzController {
  @operation({
    summary: "Get Hbz",
  })
  @get()
  static getHbz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbz",
  })
  @post("{id}")
  static createHbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
