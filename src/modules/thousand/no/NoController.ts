import { procedure, prefix, get, post, operation } from "vovk";

@prefix("no")
export default class NoController {
  @operation({
    summary: "Get No",
  })
  @get()
  static getNo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create No",
  })
  @post("{id}")
  static createNo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
