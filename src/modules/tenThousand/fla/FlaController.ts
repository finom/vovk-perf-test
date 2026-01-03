import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flas")
export default class FlaController {
  @operation({
    summary: "Get Flas",
  })
  @get()
  static getFlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fla",
  })
  @post("{id}")
  static createFla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
