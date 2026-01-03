import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khhs")
export default class KhhController {
  @operation({
    summary: "Get Khhs",
  })
  @get()
  static getKhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khh",
  })
  @post("{id}")
  static createKhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
