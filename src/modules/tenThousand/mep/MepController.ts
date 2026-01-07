import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mep")
export default class MepController {
  @operation({
    summary: "Get Mep",
  })
  @get()
  static getMep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mep",
  })
  @post("{id}")
  static createMep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
