import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kil")
export default class KilController {
  @operation({
    summary: "Get Kil",
  })
  @get()
  static getKil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kil",
  })
  @post("{id}")
  static createKil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
