import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kff")
export default class KffController {
  @operation({
    summary: "Get Kff",
  })
  @get()
  static getKff = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kff",
  })
  @post("{id}")
  static createKff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
