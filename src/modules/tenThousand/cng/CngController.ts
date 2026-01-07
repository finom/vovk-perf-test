import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cng")
export default class CngController {
  @operation({
    summary: "Get Cng",
  })
  @get()
  static getCng = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cng",
  })
  @post("{id}")
  static createCng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
