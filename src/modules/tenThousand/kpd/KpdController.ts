import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpd")
export default class KpdController {
  @operation({
    summary: "Get Kpd",
  })
  @get()
  static getKpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpd",
  })
  @post("{id}")
  static createKpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
