import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebh")
export default class EbhController {
  @operation({
    summary: "Get Ebh",
  })
  @get()
  static getEbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebh",
  })
  @post("{id}")
  static createEbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
