import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdas")
export default class KdaController {
  @operation({
    summary: "Get Kdas",
  })
  @get()
  static getKdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kda",
  })
  @post("{id}")
  static createKda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
