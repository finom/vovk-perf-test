import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gca")
export default class GcaController {
  @operation({
    summary: "Get Gca",
  })
  @get()
  static getGca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gca",
  })
  @post("{id}")
  static createGca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
