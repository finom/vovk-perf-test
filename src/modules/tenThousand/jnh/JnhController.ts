import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnh")
export default class JnhController {
  @operation({
    summary: "Get Jnh",
  })
  @get()
  static getJnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnh",
  })
  @post("{id}")
  static createJnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
