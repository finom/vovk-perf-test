import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dft")
export default class DftController {
  @operation({
    summary: "Get Dft",
  })
  @get()
  static getDft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dft",
  })
  @post("{id}")
  static createDft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
