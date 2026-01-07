import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hza")
export default class HzaController {
  @operation({
    summary: "Get Hza",
  })
  @get()
  static getHza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hza",
  })
  @post("{id}")
  static createHza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
