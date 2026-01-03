import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndfs")
export default class NdfController {
  @operation({
    summary: "Get Ndfs",
  })
  @get()
  static getNdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndf",
  })
  @post("{id}")
  static createNdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
