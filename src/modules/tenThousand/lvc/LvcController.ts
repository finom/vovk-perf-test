import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvc")
export default class LvcController {
  @operation({
    summary: "Get Lvc",
  })
  @get()
  static getLvc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvc",
  })
  @post("{id}")
  static createLvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
