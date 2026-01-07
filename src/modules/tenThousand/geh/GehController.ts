import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geh")
export default class GehController {
  @operation({
    summary: "Get Geh",
  })
  @get()
  static getGeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Geh",
  })
  @post("{id}")
  static createGeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
