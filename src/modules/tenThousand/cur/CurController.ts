import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cur")
export default class CurController {
  @operation({
    summary: "Get Cur",
  })
  @get()
  static getCur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cur",
  })
  @post("{id}")
  static createCur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
