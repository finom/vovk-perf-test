import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kda")
export default class KdaController {
  @operation({
    summary: "Get Kda",
  })
  @get()
  static getKda = procedure({
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
