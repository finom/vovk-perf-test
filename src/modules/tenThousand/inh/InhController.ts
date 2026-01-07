import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inh")
export default class InhController {
  @operation({
    summary: "Get Inh",
  })
  @get()
  static getInh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inh",
  })
  @post("{id}")
  static createInh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
