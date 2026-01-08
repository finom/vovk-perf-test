import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eh")
export default class EhController {
  @operation({
    summary: "Get Eh",
  })
  @get()
  static getEh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eh",
  })
  @post("{id}")
  static createEh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
