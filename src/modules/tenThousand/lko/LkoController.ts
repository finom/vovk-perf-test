import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkos")
export default class LkoController {
  @operation({
    summary: "Get Lkos",
  })
  @get()
  static getLkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lko",
  })
  @post("{id}")
  static createLko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
