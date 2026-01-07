import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzy")
export default class KzyController {
  @operation({
    summary: "Get Kzy",
  })
  @get()
  static getKzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzy",
  })
  @post("{id}")
  static createKzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
