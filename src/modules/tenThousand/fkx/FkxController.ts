import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkx")
export default class FkxController {
  @operation({
    summary: "Get Fkx",
  })
  @get()
  static getFkx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkx",
  })
  @post("{id}")
  static createFkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
