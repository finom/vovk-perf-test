import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kys")
export default class KysController {
  @operation({
    summary: "Get Kys",
  })
  @get()
  static getKys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kys",
  })
  @post("{id}")
  static createKys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
