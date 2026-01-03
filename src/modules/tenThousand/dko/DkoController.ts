import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkos")
export default class DkoController {
  @operation({
    summary: "Get Dkos",
  })
  @get()
  static getDkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dko",
  })
  @post("{id}")
  static createDko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
