import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnf")
export default class HnfController {
  @operation({
    summary: "Get Hnf",
  })
  @get()
  static getHnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnf",
  })
  @post("{id}")
  static createHnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
