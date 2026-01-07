import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqf")
export default class JqfController {
  @operation({
    summary: "Get Jqf",
  })
  @get()
  static getJqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqf",
  })
  @post("{id}")
  static createJqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
