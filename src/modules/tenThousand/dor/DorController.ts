import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dor")
export default class DorController {
  @operation({
    summary: "Get Dor",
  })
  @get()
  static getDor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dor",
  })
  @post("{id}")
  static createDor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
