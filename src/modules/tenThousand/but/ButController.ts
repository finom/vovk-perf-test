import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buts")
export default class ButController {
  @operation({
    summary: "Get Buts",
  })
  @get()
  static getButs = procedure({
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
