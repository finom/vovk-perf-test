import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezp")
export default class EzpController {
  @operation({
    summary: "Get Ezp",
  })
  @get()
  static getEzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezp",
  })
  @post("{id}")
  static createEzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
