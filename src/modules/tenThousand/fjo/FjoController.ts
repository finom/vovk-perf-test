import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjos")
export default class FjoController {
  @operation({
    summary: "Get Fjos",
  })
  @get()
  static getFjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjo",
  })
  @post("{id}")
  static createFjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
