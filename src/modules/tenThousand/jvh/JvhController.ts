import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvh")
export default class JvhController {
  @operation({
    summary: "Get Jvh",
  })
  @get()
  static getJvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvh",
  })
  @post("{id}")
  static createJvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
