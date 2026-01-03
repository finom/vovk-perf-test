import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msos")
export default class MsoController {
  @operation({
    summary: "Get Msos",
  })
  @get()
  static getMsos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mso",
  })
  @post("{id}")
  static createMso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
