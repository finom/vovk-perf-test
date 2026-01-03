import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jggs")
export default class JggController {
  @operation({
    summary: "Get Jggs",
  })
  @get()
  static getJggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgg",
  })
  @post("{id}")
  static createJgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
