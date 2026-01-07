import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoe")
export default class HoeController {
  @operation({
    summary: "Get Hoe",
  })
  @get()
  static getHoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hoe",
  })
  @post("{id}")
  static createHoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
