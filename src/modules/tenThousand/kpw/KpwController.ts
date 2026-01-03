import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpws")
export default class KpwController {
  @operation({
    summary: "Get Kpws",
  })
  @get()
  static getKpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpw",
  })
  @post("{id}")
  static createKpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
