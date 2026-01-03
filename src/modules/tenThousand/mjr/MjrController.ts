import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjrs")
export default class MjrController {
  @operation({
    summary: "Get Mjrs",
  })
  @get()
  static getMjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjr",
  })
  @post("{id}")
  static createMjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
