import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkos")
export default class KkoController {
  @operation({
    summary: "Get Kkos",
  })
  @get()
  static getKkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kko",
  })
  @post("{id}")
  static createKko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
