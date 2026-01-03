import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgus")
export default class DguController {
  @operation({
    summary: "Get Dgus",
  })
  @get()
  static getDgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgu",
  })
  @post("{id}")
  static createDgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
