import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnp")
export default class FnpController {
  @operation({
    summary: "Get Fnp",
  })
  @get()
  static getFnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnp",
  })
  @post("{id}")
  static createFnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
