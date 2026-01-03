import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elps")
export default class ElpController {
  @operation({
    summary: "Get Elps",
  })
  @get()
  static getElps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elp",
  })
  @post("{id}")
  static createElp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
