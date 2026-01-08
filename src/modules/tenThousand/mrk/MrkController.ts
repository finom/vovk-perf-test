import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrk")
export default class MrkController {
  @operation({
    summary: "Get Mrk",
  })
  @get()
  static getMrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrk",
  })
  @post("{id}")
  static createMrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
