import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igq")
export default class IgqController {
  @operation({
    summary: "Get Igq",
  })
  @get()
  static getIgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igq",
  })
  @post("{id}")
  static createIgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
