import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drj")
export default class DrjController {
  @operation({
    summary: "Get Drj",
  })
  @get()
  static getDrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drj",
  })
  @post("{id}")
  static createDrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
