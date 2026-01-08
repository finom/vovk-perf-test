import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifh")
export default class IfhController {
  @operation({
    summary: "Get Ifh",
  })
  @get()
  static getIfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifh",
  })
  @post("{id}")
  static createIfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
