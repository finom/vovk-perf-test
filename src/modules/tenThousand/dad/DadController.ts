import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dads")
export default class DadController {
  @operation({
    summary: "Get Dads",
  })
  @get()
  static getDads = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dad",
  })
  @post("{id}")
  static createDad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
