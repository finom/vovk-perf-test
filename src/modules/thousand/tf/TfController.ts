import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tf")
export default class TfController {
  @operation({
    summary: "Get Tf",
  })
  @get()
  static getTf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tf",
  })
  @post("{id}")
  static createTf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
