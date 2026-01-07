import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kah")
export default class KahController {
  @operation({
    summary: "Get Kah",
  })
  @get()
  static getKah = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kah",
  })
  @post("{id}")
  static createKah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
