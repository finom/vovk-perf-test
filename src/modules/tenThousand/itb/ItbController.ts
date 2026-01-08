import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itb")
export default class ItbController {
  @operation({
    summary: "Get Itb",
  })
  @get()
  static getItb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itb",
  })
  @post("{id}")
  static createItb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
