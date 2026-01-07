import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fac")
export default class FacController {
  @operation({
    summary: "Get Fac",
  })
  @get()
  static getFac = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fac",
  })
  @post("{id}")
  static createFac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
