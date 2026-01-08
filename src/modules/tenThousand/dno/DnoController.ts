import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dno")
export default class DnoController {
  @operation({
    summary: "Get Dno",
  })
  @get()
  static getDno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dno",
  })
  @post("{id}")
  static createDno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
