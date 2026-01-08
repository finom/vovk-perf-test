import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmk")
export default class DmkController {
  @operation({
    summary: "Get Dmk",
  })
  @get()
  static getDmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmk",
  })
  @post("{id}")
  static createDmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
