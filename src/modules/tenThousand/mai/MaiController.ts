import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mais")
export default class MaiController {
  @operation({
    summary: "Get Mais",
  })
  @get()
  static getMais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mai",
  })
  @post("{id}")
  static createMai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
