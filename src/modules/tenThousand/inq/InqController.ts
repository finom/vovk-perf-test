import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inq")
export default class InqController {
  @operation({
    summary: "Get Inq",
  })
  @get()
  static getInq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inq",
  })
  @post("{id}")
  static createInq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
