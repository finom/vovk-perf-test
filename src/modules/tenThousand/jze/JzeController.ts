import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jze")
export default class JzeController {
  @operation({
    summary: "Get Jze",
  })
  @get()
  static getJze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jze",
  })
  @post("{id}")
  static createJze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
