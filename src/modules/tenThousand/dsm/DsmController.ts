import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsm")
export default class DsmController {
  @operation({
    summary: "Get Dsm",
  })
  @get()
  static getDsm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsm",
  })
  @post("{id}")
  static createDsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
