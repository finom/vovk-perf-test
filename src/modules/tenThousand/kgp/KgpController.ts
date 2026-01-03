import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgps")
export default class KgpController {
  @operation({
    summary: "Get Kgps",
  })
  @get()
  static getKgps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgp",
  })
  @post("{id}")
  static createKgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
