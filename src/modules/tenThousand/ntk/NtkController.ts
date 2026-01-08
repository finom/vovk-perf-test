import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ntk")
export default class NtkController {
  @operation({
    summary: "Get Ntk",
  })
  @get()
  static getNtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntk",
  })
  @post("{id}")
  static createNtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
