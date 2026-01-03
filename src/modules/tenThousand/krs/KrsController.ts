import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krs")
export default class KrsController {
  @operation({
    summary: "Get Krs",
  })
  @get()
  static getKrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krs",
  })
  @post("{id}")
  static createKrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
