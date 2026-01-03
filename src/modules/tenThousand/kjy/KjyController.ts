import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjies")
export default class KjyController {
  @operation({
    summary: "Get Kjies",
  })
  @get()
  static getKjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjy",
  })
  @post("{id}")
  static createKjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
