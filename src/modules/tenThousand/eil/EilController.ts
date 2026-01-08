import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eil")
export default class EilController {
  @operation({
    summary: "Get Eil",
  })
  @get()
  static getEil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eil",
  })
  @post("{id}")
  static createEil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
