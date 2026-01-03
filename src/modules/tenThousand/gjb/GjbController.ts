import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjbs")
export default class GjbController {
  @operation({
    summary: "Get Gjbs",
  })
  @get()
  static getGjbs = procedure({
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
