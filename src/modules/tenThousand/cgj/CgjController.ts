import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgjs")
export default class CgjController {
  @operation({
    summary: "Get Cgjs",
  })
  @get()
  static getCgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgj",
  })
  @post("{id}")
  static createCgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
