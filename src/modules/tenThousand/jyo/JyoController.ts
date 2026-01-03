import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyos")
export default class JyoController {
  @operation({
    summary: "Get Jyos",
  })
  @get()
  static getJyos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyo",
  })
  @post("{id}")
  static createJyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
