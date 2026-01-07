import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jej")
export default class JejController {
  @operation({
    summary: "Get Jej",
  })
  @get()
  static getJej = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jej",
  })
  @post("{id}")
  static createJej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
