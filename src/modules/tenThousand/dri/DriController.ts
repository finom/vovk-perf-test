import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dri")
export default class DriController {
  @operation({
    summary: "Get Dri",
  })
  @get()
  static getDri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dri",
  })
  @post("{id}")
  static createDri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
