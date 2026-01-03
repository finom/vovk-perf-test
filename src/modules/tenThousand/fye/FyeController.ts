import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyes")
export default class FyeController {
  @operation({
    summary: "Get Fyes",
  })
  @get()
  static getFyes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fye",
  })
  @post("{id}")
  static createFye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
