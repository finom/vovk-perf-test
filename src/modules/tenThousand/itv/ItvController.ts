import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itv")
export default class ItvController {
  @operation({
    summary: "Get Itv",
  })
  @get()
  static getItv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itv",
  })
  @post("{id}")
  static createItv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
