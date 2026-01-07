import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jny")
export default class JnyController {
  @operation({
    summary: "Get Jny",
  })
  @get()
  static getJny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jny",
  })
  @post("{id}")
  static createJny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
