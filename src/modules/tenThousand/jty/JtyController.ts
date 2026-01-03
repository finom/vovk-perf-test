import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jties")
export default class JtyController {
  @operation({
    summary: "Get Jties",
  })
  @get()
  static getJties = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jty",
  })
  @post("{id}")
  static createJty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
