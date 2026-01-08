import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myo")
export default class MyoController {
  @operation({
    summary: "Get Myo",
  })
  @get()
  static getMyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myo",
  })
  @post("{id}")
  static createMyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
