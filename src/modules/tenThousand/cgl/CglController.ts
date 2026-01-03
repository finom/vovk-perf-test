import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgls")
export default class CglController {
  @operation({
    summary: "Get Cgls",
  })
  @get()
  static getCgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgl",
  })
  @post("{id}")
  static createCgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
