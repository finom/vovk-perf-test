import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddz")
export default class DdzController {
  @operation({
    summary: "Get Ddz",
  })
  @get()
  static getDdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddz",
  })
  @post("{id}")
  static createDdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
