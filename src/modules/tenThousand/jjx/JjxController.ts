import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjx")
export default class JjxController {
  @operation({
    summary: "Get Jjx",
  })
  @get()
  static getJjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjx",
  })
  @post("{id}")
  static createJjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
