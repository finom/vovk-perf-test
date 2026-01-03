import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjcs")
export default class CjcController {
  @operation({
    summary: "Get Cjcs",
  })
  @get()
  static getCjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjc",
  })
  @post("{id}")
  static createCjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
