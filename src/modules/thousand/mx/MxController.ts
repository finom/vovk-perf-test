import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mx")
export default class MxController {
  @operation({
    summary: "Get Mx",
  })
  @get()
  static getMx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mx",
  })
  @post("{id}")
  static createMx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
