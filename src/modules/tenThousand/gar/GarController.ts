import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gars")
export default class GarController {
  @operation({
    summary: "Get Gars",
  })
  @get()
  static getGars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gar",
  })
  @post("{id}")
  static createGar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
