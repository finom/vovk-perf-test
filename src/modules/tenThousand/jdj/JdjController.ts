import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdj")
export default class JdjController {
  @operation({
    summary: "Get Jdj",
  })
  @get()
  static getJdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdj",
  })
  @post("{id}")
  static createJdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
