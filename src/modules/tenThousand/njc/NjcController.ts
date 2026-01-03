import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njcs")
export default class NjcController {
  @operation({
    summary: "Get Njcs",
  })
  @get()
  static getNjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njc",
  })
  @post("{id}")
  static createNjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
