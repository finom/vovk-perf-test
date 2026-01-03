import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngis")
export default class NgiController {
  @operation({
    summary: "Get Ngis",
  })
  @get()
  static getNgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngi",
  })
  @post("{id}")
  static createNgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
