import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncfs")
export default class NcfController {
  @operation({
    summary: "Get Ncfs",
  })
  @get()
  static getNcfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncf",
  })
  @post("{id}")
  static createNcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
