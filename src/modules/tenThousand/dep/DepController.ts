import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deps")
export default class DepController {
  @operation({
    summary: "Get Deps",
  })
  @get()
  static getDeps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dep",
  })
  @post("{id}")
  static createDep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
