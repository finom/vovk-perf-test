import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mia")
export default class MiaController {
  @operation({
    summary: "Get Mia",
  })
  @get()
  static getMia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mia",
  })
  @post("{id}")
  static createMia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
