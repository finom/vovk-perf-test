import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjc")
export default class JjcController {
  @operation({
    summary: "Get Jjc",
  })
  @get()
  static getJjc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjc",
  })
  @post("{id}")
  static createJjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
