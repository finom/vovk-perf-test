import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqe")
export default class NqeController {
  @operation({
    summary: "Get Nqe",
  })
  @get()
  static getNqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqe",
  })
  @post("{id}")
  static createNqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
