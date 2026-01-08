import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dze")
export default class DzeController {
  @operation({
    summary: "Get Dze",
  })
  @get()
  static getDze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dze",
  })
  @post("{id}")
  static createDze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
