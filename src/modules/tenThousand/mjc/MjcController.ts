import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjcs")
export default class MjcController {
  @operation({
    summary: "Get Mjcs",
  })
  @get()
  static getMjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjc",
  })
  @post("{id}")
  static createMjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
