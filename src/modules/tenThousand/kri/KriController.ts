import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kri")
export default class KriController {
  @operation({
    summary: "Get Kri",
  })
  @get()
  static getKri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kri",
  })
  @post("{id}")
  static createKri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
