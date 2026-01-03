import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kars")
export default class KarController {
  @operation({
    summary: "Get Kars",
  })
  @get()
  static getKars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kar",
  })
  @post("{id}")
  static createKar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
