import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dehs")
export default class DehController {
  @operation({
    summary: "Get Dehs",
  })
  @get()
  static getDehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Deh",
  })
  @post("{id}")
  static createDeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
