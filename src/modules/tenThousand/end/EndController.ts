import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ends")
export default class EndController {
  @operation({
    summary: "Get Ends",
  })
  @get()
  static getEnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create End",
  })
  @post("{id}")
  static createEnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
