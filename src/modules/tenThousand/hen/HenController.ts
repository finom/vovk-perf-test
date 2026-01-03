import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hens")
export default class HenController {
  @operation({
    summary: "Get Hens",
  })
  @get()
  static getHens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hen",
  })
  @post("{id}")
  static createHen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
