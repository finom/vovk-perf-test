import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eno")
export default class EnoController {
  @operation({
    summary: "Get Eno",
  })
  @get()
  static getEno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eno",
  })
  @post("{id}")
  static createEno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
