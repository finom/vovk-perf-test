import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nits")
export default class NitController {
  @operation({
    summary: "Get Nits",
  })
  @get()
  static getNits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nit",
  })
  @post("{id}")
  static createNit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
