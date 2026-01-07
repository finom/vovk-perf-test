import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyo")
export default class HyoController {
  @operation({
    summary: "Get Hyo",
  })
  @get()
  static getHyo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyo",
  })
  @post("{id}")
  static createHyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
