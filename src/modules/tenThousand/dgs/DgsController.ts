import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgs")
export default class DgsController {
  @operation({
    summary: "Get Dgs",
  })
  @get()
  static getDgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgs",
  })
  @post("{id}")
  static createDgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
