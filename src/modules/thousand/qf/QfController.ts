import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qf")
export default class QfController {
  @operation({
    summary: "Get Qf",
  })
  @get()
  static getQf = procedure({
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
