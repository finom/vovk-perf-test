import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyk")
export default class HykController {
  @operation({
    summary: "Get Hyk",
  })
  @get()
  static getHyk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyk",
  })
  @post("{id}")
  static createHyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
