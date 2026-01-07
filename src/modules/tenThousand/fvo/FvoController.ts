import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvo")
export default class FvoController {
  @operation({
    summary: "Get Fvo",
  })
  @get()
  static getFvo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvo",
  })
  @post("{id}")
  static createFvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
