import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emj")
export default class EmjController {
  @operation({
    summary: "Get Emj",
  })
  @get()
  static getEmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emj",
  })
  @post("{id}")
  static createEmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
