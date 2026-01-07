import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ve")
export default class VeController {
  @operation({
    summary: "Get Ve",
  })
  @get()
  static getVe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ve",
  })
  @post("{id}")
  static createVe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
