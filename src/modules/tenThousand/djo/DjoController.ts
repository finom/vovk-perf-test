import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djo")
export default class DjoController {
  @operation({
    summary: "Get Djo",
  })
  @get()
  static getDjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djo",
  })
  @post("{id}")
  static createDjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
