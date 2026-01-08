import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhg")
export default class JhgController {
  @operation({
    summary: "Get Jhg",
  })
  @get()
  static getJhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhg",
  })
  @post("{id}")
  static createJhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
