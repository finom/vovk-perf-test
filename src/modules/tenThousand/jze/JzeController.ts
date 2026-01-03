import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzes")
export default class JzeController {
  @operation({
    summary: "Get Jzes",
  })
  @get()
  static getJzes = procedure({
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
