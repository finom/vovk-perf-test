import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzps")
export default class KzpController {
  @operation({
    summary: "Get Kzps",
  })
  @get()
  static getKzps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzp",
  })
  @post("{id}")
  static createKzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
