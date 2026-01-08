import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpe")
export default class MpeController {
  @operation({
    summary: "Get Mpe",
  })
  @get()
  static getMpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpe",
  })
  @post("{id}")
  static createMpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
