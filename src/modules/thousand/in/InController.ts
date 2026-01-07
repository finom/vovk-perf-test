import { procedure, prefix, get, post, operation } from "vovk";

@prefix("in")
export default class InController {
  @operation({
    summary: "Get In",
  })
  @get()
  static getIn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create In",
  })
  @post("{id}")
  static createIn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
