import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hja")
export default class HjaController {
  @operation({
    summary: "Get Hja",
  })
  @get()
  static getHja = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hja",
  })
  @post("{id}")
  static createHja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
