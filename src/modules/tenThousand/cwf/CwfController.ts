import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwfs")
export default class CwfController {
  @operation({
    summary: "Get Cwfs",
  })
  @get()
  static getCwfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwf",
  })
  @post("{id}")
  static createCwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
