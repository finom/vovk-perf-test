import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dza")
export default class DzaController {
  @operation({
    summary: "Get Dza",
  })
  @get()
  static getDza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dza",
  })
  @post("{id}")
  static createDza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
