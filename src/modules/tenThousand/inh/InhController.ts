import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inh")
export default class InhController {
  @operation({
    summary: "Get Inh",
  })
  @get()
  static getInh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inh",
  })
  @post("{id}")
  static createInh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
