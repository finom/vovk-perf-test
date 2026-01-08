import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elg")
export default class ElgController {
  @operation({
    summary: "Get Elg",
  })
  @get()
  static getElg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elg",
  })
  @post("{id}")
  static createElg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
