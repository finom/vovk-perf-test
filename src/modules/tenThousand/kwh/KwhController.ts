import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwhs")
export default class KwhController {
  @operation({
    summary: "Get Kwhs",
  })
  @get()
  static getKwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwh",
  })
  @post("{id}")
  static createKwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
