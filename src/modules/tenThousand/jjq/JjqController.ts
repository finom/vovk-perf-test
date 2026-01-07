import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjq")
export default class JjqController {
  @operation({
    summary: "Get Jjq",
  })
  @get()
  static getJjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjq",
  })
  @post("{id}")
  static createJjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
