import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aee")
export default class AeeController {
  @operation({
    summary: "Get Aee",
  })
  @get()
  static getAee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aee",
  })
  @post("{id}")
  static createAee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
