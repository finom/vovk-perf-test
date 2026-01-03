import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkos")
export default class NkoController {
  @operation({
    summary: "Get Nkos",
  })
  @get()
  static getNkos = procedure({
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
