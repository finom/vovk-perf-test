import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euz")
export default class EuzController {
  @operation({
    summary: "Get Euz",
  })
  @get()
  static getEuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euz",
  })
  @post("{id}")
  static createEuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
