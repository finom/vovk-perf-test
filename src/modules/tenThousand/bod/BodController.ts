import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bod")
export default class BodController {
  @operation({
    summary: "Get Bod",
  })
  @get()
  static getBod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bod",
  })
  @post("{id}")
  static createBod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
