import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyxes")
export default class CyxController {
  @operation({
    summary: "Get Cyxes",
  })
  @get()
  static getCyxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyx",
  })
  @post("{id}")
  static createCyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
