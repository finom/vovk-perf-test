import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpws")
export default class CpwController {
  @operation({
    summary: "Get Cpws",
  })
  @get()
  static getCpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpw",
  })
  @post("{id}")
  static createCpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
