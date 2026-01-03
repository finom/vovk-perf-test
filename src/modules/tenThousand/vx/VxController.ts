import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vxes")
export default class VxController {
  @operation({
    summary: "Get Vxes",
  })
  @get()
  static getVxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vx",
  })
  @post("{id}")
  static createVx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
