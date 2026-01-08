import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mum")
export default class MumController {
  @operation({
    summary: "Get Mum",
  })
  @get()
  static getMum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mum",
  })
  @post("{id}")
  static createMum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
