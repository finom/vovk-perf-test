import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyzs")
export default class JyzController {
  @operation({
    summary: "Get Jyzs",
  })
  @get()
  static getJyzs = procedure({
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
