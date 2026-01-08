import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyu")
export default class JyuController {
  @operation({
    summary: "Get Jyu",
  })
  @get()
  static getJyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyu",
  })
  @post("{id}")
  static createJyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
