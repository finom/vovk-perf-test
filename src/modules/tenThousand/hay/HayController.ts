import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hays")
export default class HayController {
  @operation({
    summary: "Get Hays",
  })
  @get()
  static getHays = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hay",
  })
  @post("{id}")
  static createHay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
