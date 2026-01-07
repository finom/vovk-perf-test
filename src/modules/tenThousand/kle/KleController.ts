import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kle")
export default class KleController {
  @operation({
    summary: "Get Kle",
  })
  @get()
  static getKle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kle",
  })
  @post("{id}")
  static createKle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
