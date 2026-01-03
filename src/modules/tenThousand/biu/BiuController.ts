import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bius")
export default class BiuController {
  @operation({
    summary: "Get Bius",
  })
  @get()
  static getBius = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biu",
  })
  @post("{id}")
  static createBiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
