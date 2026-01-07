import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjn")
export default class JjnController {
  @operation({
    summary: "Get Jjn",
  })
  @get()
  static getJjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjn",
  })
  @post("{id}")
  static createJjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
