import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqfs")
export default class KqfController {
  @operation({
    summary: "Get Kqfs",
  })
  @get()
  static getKqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqf",
  })
  @post("{id}")
  static createKqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
