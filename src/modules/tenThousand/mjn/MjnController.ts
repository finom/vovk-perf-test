import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjn")
export default class MjnController {
  @operation({
    summary: "Get Mjn",
  })
  @get()
  static getMjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjn",
  })
  @post("{id}")
  static createMjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
