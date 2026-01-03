import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgcs")
export default class CgcController {
  @operation({
    summary: "Get Cgcs",
  })
  @get()
  static getCgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgc",
  })
  @post("{id}")
  static createCgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
