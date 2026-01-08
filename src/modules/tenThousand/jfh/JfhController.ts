import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfh")
export default class JfhController {
  @operation({
    summary: "Get Jfh",
  })
  @get()
  static getJfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfh",
  })
  @post("{id}")
  static createJfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
