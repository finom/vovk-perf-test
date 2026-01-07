import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpc")
export default class KpcController {
  @operation({
    summary: "Get Kpc",
  })
  @get()
  static getKpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpc",
  })
  @post("{id}")
  static createKpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
