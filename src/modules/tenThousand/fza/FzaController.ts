import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fza")
export default class FzaController {
  @operation({
    summary: "Get Fza",
  })
  @get()
  static getFza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fza",
  })
  @post("{id}")
  static createFza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
