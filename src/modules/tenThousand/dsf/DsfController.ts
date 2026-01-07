import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsf")
export default class DsfController {
  @operation({
    summary: "Get Dsf",
  })
  @get()
  static getDsf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsf",
  })
  @post("{id}")
  static createDsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
