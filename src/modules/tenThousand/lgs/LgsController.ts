import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgs")
export default class LgsController {
  @operation({
    summary: "Get Lgs",
  })
  @get()
  static getLgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgs",
  })
  @post("{id}")
  static createLgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
