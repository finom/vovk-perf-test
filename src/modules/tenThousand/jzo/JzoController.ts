import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzo")
export default class JzoController {
  @operation({
    summary: "Get Jzo",
  })
  @get()
  static getJzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzo",
  })
  @post("{id}")
  static createJzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
