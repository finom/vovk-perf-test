import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aii")
export default class AiiController {
  @operation({
    summary: "Get Aii",
  })
  @get()
  static getAii = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aii",
  })
  @post("{id}")
  static createAii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
