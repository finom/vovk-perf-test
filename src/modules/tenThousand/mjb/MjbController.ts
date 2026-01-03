import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjbs")
export default class MjbController {
  @operation({
    summary: "Get Mjbs",
  })
  @get()
  static getMjbs = procedure({
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
