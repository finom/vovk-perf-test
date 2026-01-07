import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jh")
export default class JhController {
  @operation({
    summary: "Get Jh",
  })
  @get()
  static getJh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jh",
  })
  @post("{id}")
  static createJh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
