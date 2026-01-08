import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpo")
export default class MpoController {
  @operation({
    summary: "Get Mpo",
  })
  @get()
  static getMpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpo",
  })
  @post("{id}")
  static createMpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
