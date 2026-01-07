import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jec")
export default class JecController {
  @operation({
    summary: "Get Jec",
  })
  @get()
  static getJec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jec",
  })
  @post("{id}")
  static createJec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
