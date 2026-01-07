import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eko")
export default class EkoController {
  @operation({
    summary: "Get Eko",
  })
  @get()
  static getEko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eko",
  })
  @post("{id}")
  static createEko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
