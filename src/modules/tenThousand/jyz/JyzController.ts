import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyz")
export default class JyzController {
  @operation({
    summary: "Get Jyz",
  })
  @get()
  static getJyz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyz",
  })
  @post("{id}")
  static createJyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
