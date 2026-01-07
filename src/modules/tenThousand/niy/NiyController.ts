import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niy")
export default class NiyController {
  @operation({
    summary: "Get Niy",
  })
  @get()
  static getNiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Niy",
  })
  @post("{id}")
  static createNiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
