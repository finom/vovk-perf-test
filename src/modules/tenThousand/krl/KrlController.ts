import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krl")
export default class KrlController {
  @operation({
    summary: "Get Krl",
  })
  @get()
  static getKrl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krl",
  })
  @post("{id}")
  static createKrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
