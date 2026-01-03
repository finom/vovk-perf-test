import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgas")
export default class HgaController {
  @operation({
    summary: "Get Hgas",
  })
  @get()
  static getHgas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hga",
  })
  @post("{id}")
  static createHga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
