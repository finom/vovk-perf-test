import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kza")
export default class KzaController {
  @operation({
    summary: "Get Kza",
  })
  @get()
  static getKza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kza",
  })
  @post("{id}")
  static createKza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
