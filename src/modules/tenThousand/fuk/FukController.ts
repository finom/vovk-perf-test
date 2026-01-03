import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuks")
export default class FukController {
  @operation({
    summary: "Get Fuks",
  })
  @get()
  static getFuks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuk",
  })
  @post("{id}")
  static createFuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
