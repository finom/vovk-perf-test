import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbes")
export default class KbeController {
  @operation({
    summary: "Get Kbes",
  })
  @get()
  static getKbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbe",
  })
  @post("{id}")
  static createKbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
