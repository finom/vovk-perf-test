import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zy")
export default class ZyController {
  @operation({
    summary: "Get Zy",
  })
  @get()
  static getZy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zy",
  })
  @post("{id}")
  static createZy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
