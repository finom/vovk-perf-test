import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpe")
export default class FpeController {
  @operation({
    summary: "Get Fpe",
  })
  @get()
  static getFpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpe",
  })
  @post("{id}")
  static createFpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
