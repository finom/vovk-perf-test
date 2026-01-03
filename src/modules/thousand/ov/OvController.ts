import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ovs")
export default class OvController {
  @operation({
    summary: "Get Ovs",
  })
  @get()
  static getOvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ov",
  })
  @post("{id}")
  static createOv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
