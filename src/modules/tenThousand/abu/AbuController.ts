import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abu")
export default class AbuController {
  @operation({
    summary: "Get Abu",
  })
  @get()
  static getAbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abu",
  })
  @post("{id}")
  static createAbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
