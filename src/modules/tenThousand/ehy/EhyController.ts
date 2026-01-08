import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehy")
export default class EhyController {
  @operation({
    summary: "Get Ehy",
  })
  @get()
  static getEhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehy",
  })
  @post("{id}")
  static createEhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
