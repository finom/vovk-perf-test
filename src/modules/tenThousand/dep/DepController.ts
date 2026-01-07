import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dep")
export default class DepController {
  @operation({
    summary: "Get Dep",
  })
  @get()
  static getDep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dep",
  })
  @post("{id}")
  static createDep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
