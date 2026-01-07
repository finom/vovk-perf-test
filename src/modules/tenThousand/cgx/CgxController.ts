import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgx")
export default class CgxController {
  @operation({
    summary: "Get Cgx",
  })
  @get()
  static getCgx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgx",
  })
  @post("{id}")
  static createCgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
