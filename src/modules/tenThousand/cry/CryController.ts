import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cries")
export default class CryController {
  @operation({
    summary: "Get Cries",
  })
  @get()
  static getCries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cry",
  })
  @post("{id}")
  static createCry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
