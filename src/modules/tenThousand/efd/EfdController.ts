import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efd")
export default class EfdController {
  @operation({
    summary: "Get Efd",
  })
  @get()
  static getEfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efd",
  })
  @post("{id}")
  static createEfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
