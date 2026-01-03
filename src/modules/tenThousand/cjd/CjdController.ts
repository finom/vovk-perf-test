import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjds")
export default class CjdController {
  @operation({
    summary: "Get Cjds",
  })
  @get()
  static getCjds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjd",
  })
  @post("{id}")
  static createCjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
