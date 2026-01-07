import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aup")
export default class AupController {
  @operation({
    summary: "Get Aup",
  })
  @get()
  static getAup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aup",
  })
  @post("{id}")
  static createAup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
