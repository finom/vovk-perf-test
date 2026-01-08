import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsj")
export default class DsjController {
  @operation({
    summary: "Get Dsj",
  })
  @get()
  static getDsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsj",
  })
  @post("{id}")
  static createDsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
