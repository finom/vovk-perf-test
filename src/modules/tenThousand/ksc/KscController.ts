import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksc")
export default class KscController {
  @operation({
    summary: "Get Ksc",
  })
  @get()
  static getKsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksc",
  })
  @post("{id}")
  static createKsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
