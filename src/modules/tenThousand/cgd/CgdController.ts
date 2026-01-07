import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgd")
export default class CgdController {
  @operation({
    summary: "Get Cgd",
  })
  @get()
  static getCgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgd",
  })
  @post("{id}")
  static createCgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
