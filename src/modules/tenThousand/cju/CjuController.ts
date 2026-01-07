import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cju")
export default class CjuController {
  @operation({
    summary: "Get Cju",
  })
  @get()
  static getCju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cju",
  })
  @post("{id}")
  static createCju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
