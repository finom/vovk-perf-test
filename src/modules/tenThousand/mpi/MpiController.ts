import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
