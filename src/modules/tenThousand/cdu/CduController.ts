import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdu")
export default class CduController {
  @operation({
    summary: "Get Cdu",
  })
  @get()
  static getCdu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdu",
  })
  @post("{id}")
  static createCdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
