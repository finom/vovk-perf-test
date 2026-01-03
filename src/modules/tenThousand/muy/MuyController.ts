import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muys")
export default class MuyController {
  @operation({
    summary: "Get Muys",
  })
  @get()
  static getMuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muy",
  })
  @post("{id}")
  static createMuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
