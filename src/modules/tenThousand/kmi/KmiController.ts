import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmi")
export default class KmiController {
  @operation({
    summary: "Get Kmi",
  })
  @get()
  static getKmi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmi",
  })
  @post("{id}")
  static createKmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
