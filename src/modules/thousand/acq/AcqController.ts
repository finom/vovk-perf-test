import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acq")
export default class AcqController {
  @operation({
    summary: "Get Acq",
  })
  @get()
  static getAcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acq",
  })
  @post("{id}")
  static createAcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
