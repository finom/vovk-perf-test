import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkos")
export default class FkoController {
  @operation({
    summary: "Get Fkos",
  })
  @get()
  static getFkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fko",
  })
  @post("{id}")
  static createFko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
