import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwb")
export default class KwbController {
  @operation({
    summary: "Get Kwb",
  })
  @get()
  static getKwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwb",
  })
  @post("{id}")
  static createKwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
