import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewhs")
export default class EwhController {
  @operation({
    summary: "Get Ewhs",
  })
  @get()
  static getEwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewh",
  })
  @post("{id}")
  static createEwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
