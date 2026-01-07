import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgj")
export default class CgjController {
  @operation({
    summary: "Get Cgj",
  })
  @get()
  static getCgj = procedure({
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
