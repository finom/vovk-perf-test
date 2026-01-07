import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayv")
export default class AyvController {
  @operation({
    summary: "Get Ayv",
  })
  @get()
  static getAyv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayv",
  })
  @post("{id}")
  static createAyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
