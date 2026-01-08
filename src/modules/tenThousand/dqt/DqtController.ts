import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqt")
export default class DqtController {
  @operation({
    summary: "Get Dqt",
  })
  @get()
  static getDqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqt",
  })
  @post("{id}")
  static createDqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
