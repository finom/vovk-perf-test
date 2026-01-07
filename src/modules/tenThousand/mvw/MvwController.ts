import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvw")
export default class MvwController {
  @operation({
    summary: "Get Mvw",
  })
  @get()
  static getMvw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvw",
  })
  @post("{id}")
  static createMvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
