import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muh")
export default class MuhController {
  @operation({
    summary: "Get Muh",
  })
  @get()
  static getMuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muh",
  })
  @post("{id}")
  static createMuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
