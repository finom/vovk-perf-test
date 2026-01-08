import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clh")
export default class ClhController {
  @operation({
    summary: "Get Clh",
  })
  @get()
  static getClh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clh",
  })
  @post("{id}")
  static createClh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
