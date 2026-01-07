import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csh")
export default class CshController {
  @operation({
    summary: "Get Csh",
  })
  @get()
  static getCsh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csh",
  })
  @post("{id}")
  static createCsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
