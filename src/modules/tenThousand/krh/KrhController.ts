import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krhs")
export default class KrhController {
  @operation({
    summary: "Get Krhs",
  })
  @get()
  static getKrhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krh",
  })
  @post("{id}")
  static createKrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
