import { procedure, prefix, get, post, operation } from "vovk";

@prefix("but")
export default class ButController {
  @operation({
    summary: "Get But",
  })
  @get()
  static getBut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create But",
  })
  @post("{id}")
  static createBut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
