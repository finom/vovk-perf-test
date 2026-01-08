import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dva")
export default class DvaController {
  @operation({
    summary: "Get Dva",
  })
  @get()
  static getDva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dva",
  })
  @post("{id}")
  static createDva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
