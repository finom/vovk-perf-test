import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjj")
export default class MjjController {
  @operation({
    summary: "Get Mjj",
  })
  @get()
  static getMjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjj",
  })
  @post("{id}")
  static createMjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
