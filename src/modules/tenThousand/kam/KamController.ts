import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kams")
export default class KamController {
  @operation({
    summary: "Get Kams",
  })
  @get()
  static getKams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kam",
  })
  @post("{id}")
  static createKam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
