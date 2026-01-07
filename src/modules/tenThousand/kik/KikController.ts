import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kik")
export default class KikController {
  @operation({
    summary: "Get Kik",
  })
  @get()
  static getKik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kik",
  })
  @post("{id}")
  static createKik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
