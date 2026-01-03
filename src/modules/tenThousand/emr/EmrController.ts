import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emrs")
export default class EmrController {
  @operation({
    summary: "Get Emrs",
  })
  @get()
  static getEmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emr",
  })
  @post("{id}")
  static createEmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
