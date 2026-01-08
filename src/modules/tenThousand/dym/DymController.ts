import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dym")
export default class DymController {
  @operation({
    summary: "Get Dym",
  })
  @get()
  static getDym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dym",
  })
  @post("{id}")
  static createDym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
