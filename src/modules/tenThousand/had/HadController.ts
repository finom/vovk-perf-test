import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("had")
export default class HadController {
  @operation({
    summary: "Get Had",
  })
  @get()
  static getHad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Had",
  })
  @post("{id}")
  static createHad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
