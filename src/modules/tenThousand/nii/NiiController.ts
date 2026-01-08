import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nii")
export default class NiiController {
  @operation({
    summary: "Get Nii",
  })
  @get()
  static getNii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nii",
  })
  @post("{id}")
  static createNii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
