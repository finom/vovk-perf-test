import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qfs")
export default class QfController {
  @operation({
    summary: "Get Qfs",
  })
  @get()
  static getQfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qf",
  })
  @post("{id}")
  static createQf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
