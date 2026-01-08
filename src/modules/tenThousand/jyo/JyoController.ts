import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyo")
export default class JyoController {
  @operation({
    summary: "Get Jyo",
  })
  @get()
  static getJyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyo",
  })
  @post("{id}")
  static createJyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
