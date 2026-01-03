import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ems")
export default class EmsController {
  @operation({
    summary: "Get Ems",
  })
  @get()
  static getEms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ems",
  })
  @post("{id}")
  static createEms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
