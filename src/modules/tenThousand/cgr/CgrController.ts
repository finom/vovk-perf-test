import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgr")
export default class CgrController {
  @operation({
    summary: "Get Cgr",
  })
  @get()
  static getCgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgr",
  })
  @post("{id}")
  static createCgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
