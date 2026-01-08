import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eql")
export default class EqlController {
  @operation({
    summary: "Get Eql",
  })
  @get()
  static getEql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eql",
  })
  @post("{id}")
  static createEql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
