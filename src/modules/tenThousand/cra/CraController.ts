import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cra")
export default class CraController {
  @operation({
    summary: "Get Cra",
  })
  @get()
  static getCra = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cra",
  })
  @post("{id}")
  static createCra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
