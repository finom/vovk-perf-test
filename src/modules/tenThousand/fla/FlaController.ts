import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fla")
export default class FlaController {
  @operation({
    summary: "Get Fla",
  })
  @get()
  static getFla = procedure({
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
