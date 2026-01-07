import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdm")
export default class KdmController {
  @operation({
    summary: "Get Kdm",
  })
  @get()
  static getKdm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdm",
  })
  @post("{id}")
  static createKdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
