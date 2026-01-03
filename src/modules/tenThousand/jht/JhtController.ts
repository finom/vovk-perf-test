import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhts")
export default class JhtController {
  @operation({
    summary: "Get Jhts",
  })
  @get()
  static getJhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jht",
  })
  @post("{id}")
  static createJht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
