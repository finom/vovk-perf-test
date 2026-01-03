import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldfs")
export default class LdfController {
  @operation({
    summary: "Get Ldfs",
  })
  @get()
  static getLdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldf",
  })
  @post("{id}")
  static createLdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
