import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mo")
export default class MoController {
  @operation({
    summary: "Get Mo",
  })
  @get()
  static getMo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mo",
  })
  @post("{id}")
  static createMo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
