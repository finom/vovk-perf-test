import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpi")
export default class MpiController {
  @operation({
    summary: "Get Mpi",
  })
  @get()
  static getMpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpi",
  })
  @post("{id}")
  static createMpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
