import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdf")
export default class JdfController {
  @operation({
    summary: "Get Jdf",
  })
  @get()
  static getJdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdf",
  })
  @post("{id}")
  static createJdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
