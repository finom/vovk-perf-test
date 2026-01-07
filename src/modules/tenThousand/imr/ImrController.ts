import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imr")
export default class ImrController {
  @operation({
    summary: "Get Imr",
  })
  @get()
  static getImr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imr",
  })
  @post("{id}")
  static createImr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
