import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvf")
export default class MvfController {
  @operation({
    summary: "Get Mvf",
  })
  @get()
  static getMvf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvf",
  })
  @post("{id}")
  static createMvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
