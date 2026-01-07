import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyo")
export default class JyoController {
  @operation({
    summary: "Get Jyo",
  })
  @get()
  static getJyo = procedure({
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
