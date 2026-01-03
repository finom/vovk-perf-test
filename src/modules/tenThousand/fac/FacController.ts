import { procedure, prefix, get, post, operation } from "vovk";

@prefix("facs")
export default class FacController {
  @operation({
    summary: "Get Facs",
  })
  @get()
  static getFacs = procedure({
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
