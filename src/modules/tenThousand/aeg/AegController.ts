import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aeg")
export default class AegController {
  @operation({
    summary: "Get Aeg",
  })
  @get()
  static getAeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aeg",
  })
  @post("{id}")
  static createAeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
