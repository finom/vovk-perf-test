import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjhs")
export default class JjhController {
  @operation({
    summary: "Get Jjhs",
  })
  @get()
  static getJjhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjh",
  })
  @post("{id}")
  static createJjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
