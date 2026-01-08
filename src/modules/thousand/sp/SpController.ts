import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sp")
export default class SpController {
  @operation({
    summary: "Get Sp",
  })
  @get()
  static getSp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sp",
  })
  @post("{id}")
  static createSp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
