import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxf")
export default class LxfController {
  @operation({
    summary: "Get Lxf",
  })
  @get()
  static getLxf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxf",
  })
  @post("{id}")
  static createLxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
