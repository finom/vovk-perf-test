import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dius")
export default class DiuController {
  @operation({
    summary: "Get Dius",
  })
  @get()
  static getDius = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Diu",
  })
  @post("{id}")
  static createDiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
