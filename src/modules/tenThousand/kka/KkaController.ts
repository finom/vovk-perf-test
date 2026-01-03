import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkas")
export default class KkaController {
  @operation({
    summary: "Get Kkas",
  })
  @get()
  static getKkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kka",
  })
  @post("{id}")
  static createKka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
