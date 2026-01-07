import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmi")
export default class GmiController {
  @operation({
    summary: "Get Gmi",
  })
  @get()
  static getGmi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmi",
  })
  @post("{id}")
  static createGmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
