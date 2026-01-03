import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmps")
export default class DmpController {
  @operation({
    summary: "Get Dmps",
  })
  @get()
  static getDmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmp",
  })
  @post("{id}")
  static createDmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
