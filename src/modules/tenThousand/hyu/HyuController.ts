import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyu")
export default class HyuController {
  @operation({
    summary: "Get Hyu",
  })
  @get()
  static getHyu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyu",
  })
  @post("{id}")
  static createHyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
