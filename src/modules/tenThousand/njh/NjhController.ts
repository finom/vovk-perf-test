import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njhs")
export default class NjhController {
  @operation({
    summary: "Get Njhs",
  })
  @get()
  static getNjhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njh",
  })
  @post("{id}")
  static createNjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
