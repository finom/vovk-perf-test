import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jye")
export default class JyeController {
  @operation({
    summary: "Get Jye",
  })
  @get()
  static getJye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jye",
  })
  @post("{id}")
  static createJye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
