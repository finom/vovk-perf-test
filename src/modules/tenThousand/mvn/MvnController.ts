import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvn")
export default class MvnController {
  @operation({
    summary: "Get Mvn",
  })
  @get()
  static getMvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvn",
  })
  @post("{id}")
  static createMvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
