import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjy")
export default class JjyController {
  @operation({
    summary: "Get Jjy",
  })
  @get()
  static getJjy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjy",
  })
  @post("{id}")
  static createJjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
