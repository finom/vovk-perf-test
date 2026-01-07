import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjn")
export default class CjnController {
  @operation({
    summary: "Get Cjn",
  })
  @get()
  static getCjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjn",
  })
  @post("{id}")
  static createCjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
