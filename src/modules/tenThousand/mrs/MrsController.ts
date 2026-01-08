import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrs")
export default class MrsController {
  @operation({
    summary: "Get Mrs",
  })
  @get()
  static getMrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrs",
  })
  @post("{id}")
  static createMrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
