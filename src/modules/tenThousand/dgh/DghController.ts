import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dghs")
export default class DghController {
  @operation({
    summary: "Get Dghs",
  })
  @get()
  static getDghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgh",
  })
  @post("{id}")
  static createDgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
