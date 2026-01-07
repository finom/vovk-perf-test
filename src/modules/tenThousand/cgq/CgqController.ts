import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgq")
export default class CgqController {
  @operation({
    summary: "Get Cgq",
  })
  @get()
  static getCgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgq",
  })
  @post("{id}")
  static createCgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
