import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nci")
export default class NciController {
  @operation({
    summary: "Get Nci",
  })
  @get()
  static getNci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nci",
  })
  @post("{id}")
  static createNci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
