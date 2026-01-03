import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djes")
export default class DjeController {
  @operation({
    summary: "Get Djes",
  })
  @get()
  static getDjes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dje",
  })
  @post("{id}")
  static createDje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
