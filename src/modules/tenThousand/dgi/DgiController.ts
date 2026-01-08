import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgi")
export default class DgiController {
  @operation({
    summary: "Get Dgi",
  })
  @get()
  static getDgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgi",
  })
  @post("{id}")
  static createDgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
