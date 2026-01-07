import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nax")
export default class NaxController {
  @operation({
    summary: "Get Nax",
  })
  @get()
  static getNax = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nax",
  })
  @post("{id}")
  static createNax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
