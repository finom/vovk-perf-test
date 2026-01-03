import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grrs")
export default class GrrController {
  @operation({
    summary: "Get Grrs",
  })
  @get()
  static getGrrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grr",
  })
  @post("{id}")
  static createGrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
