import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpk")
export default class CpkController {
  @operation({
    summary: "Get Cpk",
  })
  @get()
  static getCpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpk",
  })
  @post("{id}")
  static createCpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
