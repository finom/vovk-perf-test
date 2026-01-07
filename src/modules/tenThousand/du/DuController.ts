import { procedure, prefix, get, post, operation } from "vovk";

@prefix("du")
export default class DuController {
  @operation({
    summary: "Get Du",
  })
  @get()
  static getDu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Du",
  })
  @post("{id}")
  static createDu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
