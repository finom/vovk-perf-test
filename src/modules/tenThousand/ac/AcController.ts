import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ac")
export default class AcController {
  @operation({
    summary: "Get Ac",
  })
  @get()
  static getAc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ac",
  })
  @post("{id}")
  static createAc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
