import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjds")
export default class MjdController {
  @operation({
    summary: "Get Mjds",
  })
  @get()
  static getMjds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjd",
  })
  @post("{id}")
  static createMjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
