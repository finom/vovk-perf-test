import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyz")
export default class CyzController {
  @operation({
    summary: "Get Cyz",
  })
  @get()
  static getCyz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyz",
  })
  @post("{id}")
  static createCyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
