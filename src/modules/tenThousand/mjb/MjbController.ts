import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjb")
export default class MjbController {
  @operation({
    summary: "Get Mjb",
  })
  @get()
  static getMjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjb",
  })
  @post("{id}")
  static createMjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
