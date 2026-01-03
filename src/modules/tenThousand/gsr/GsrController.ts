import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsrs")
export default class GsrController {
  @operation({
    summary: "Get Gsrs",
  })
  @get()
  static getGsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsr",
  })
  @post("{id}")
  static createGsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
