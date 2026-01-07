import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rz")
export default class RzController {
  @operation({
    summary: "Get Rz",
  })
  @get()
  static getRz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rz",
  })
  @post("{id}")
  static createRz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
