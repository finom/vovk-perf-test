import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbn")
export default class FbnController {
  @operation({
    summary: "Get Fbn",
  })
  @get()
  static getFbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbn",
  })
  @post("{id}")
  static createFbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
