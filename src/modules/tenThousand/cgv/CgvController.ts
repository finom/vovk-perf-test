import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgv")
export default class CgvController {
  @operation({
    summary: "Get Cgv",
  })
  @get()
  static getCgv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgv",
  })
  @post("{id}")
  static createCgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
