import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnk")
export default class NnkController {
  @operation({
    summary: "Get Nnk",
  })
  @get()
  static getNnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnk",
  })
  @post("{id}")
  static createNnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
