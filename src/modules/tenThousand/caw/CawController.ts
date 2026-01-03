import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caws")
export default class CawController {
  @operation({
    summary: "Get Caws",
  })
  @get()
  static getCaws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Caw",
  })
  @post("{id}")
  static createCaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
