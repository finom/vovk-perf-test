import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njq")
export default class NjqController {
  @operation({
    summary: "Get Njq",
  })
  @get()
  static getNjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njq",
  })
  @post("{id}")
  static createNjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
