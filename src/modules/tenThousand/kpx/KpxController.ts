import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpx")
export default class KpxController {
  @operation({
    summary: "Get Kpx",
  })
  @get()
  static getKpx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpx",
  })
  @post("{id}")
  static createKpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
