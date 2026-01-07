import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oc")
export default class OcController {
  @operation({
    summary: "Get Oc",
  })
  @get()
  static getOc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oc",
  })
  @post("{id}")
  static createOc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
