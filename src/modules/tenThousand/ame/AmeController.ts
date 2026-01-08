import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ame")
export default class AmeController {
  @operation({
    summary: "Get Ame",
  })
  @get()
  static getAme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ame",
  })
  @post("{id}")
  static createAme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
