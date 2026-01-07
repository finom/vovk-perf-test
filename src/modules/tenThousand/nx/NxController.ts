import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nx")
export default class NxController {
  @operation({
    summary: "Get Nx",
  })
  @get()
  static getNx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nx",
  })
  @post("{id}")
  static createNx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
