import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eob")
export default class EobController {
  @operation({
    summary: "Get Eob",
  })
  @get()
  static getEob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eob",
  })
  @post("{id}")
  static createEob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
