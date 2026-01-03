import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvns")
export default class MvnController {
  @operation({
    summary: "Get Mvns",
  })
  @get()
  static getMvns = procedure({
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
