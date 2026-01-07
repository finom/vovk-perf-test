import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nko")
export default class NkoController {
  @operation({
    summary: "Get Nko",
  })
  @get()
  static getNko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nko",
  })
  @post("{id}")
  static createNko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
