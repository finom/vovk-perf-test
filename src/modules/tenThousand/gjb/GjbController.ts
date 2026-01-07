import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjb")
export default class GjbController {
  @operation({
    summary: "Get Gjb",
  })
  @get()
  static getGjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjb",
  })
  @post("{id}")
  static createGjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
