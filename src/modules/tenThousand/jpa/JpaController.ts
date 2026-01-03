import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpas")
export default class JpaController {
  @operation({
    summary: "Get Jpas",
  })
  @get()
  static getJpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpa",
  })
  @post("{id}")
  static createJpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
