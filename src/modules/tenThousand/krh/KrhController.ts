import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krh")
export default class KrhController {
  @operation({
    summary: "Get Krh",
  })
  @get()
  static getKrh = procedure({
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
