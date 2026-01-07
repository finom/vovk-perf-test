import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lf")
export default class LfController {
  @operation({
    summary: "Get Lf",
  })
  @get()
  static getLf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lf",
  })
  @post("{id}")
  static createLf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
