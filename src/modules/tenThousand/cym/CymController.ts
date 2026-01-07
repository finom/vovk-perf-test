import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cym")
export default class CymController {
  @operation({
    summary: "Get Cym",
  })
  @get()
  static getCym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cym",
  })
  @post("{id}")
  static createCym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
