import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dif")
export default class DifController {
  @operation({
    summary: "Get Dif",
  })
  @get()
  static getDif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dif",
  })
  @post("{id}")
  static createDif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
