import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aac")
export default class AacController {
  @operation({
    summary: "Get Aac",
  })
  @get()
  static getAac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aac",
  })
  @post("{id}")
  static createAac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
