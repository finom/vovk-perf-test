import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rfs")
export default class RfController {
  @operation({
    summary: "Get Rfs",
  })
  @get()
  static getRfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rf",
  })
  @post("{id}")
  static createRf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
