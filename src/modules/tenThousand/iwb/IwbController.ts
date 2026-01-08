import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwb")
export default class IwbController {
  @operation({
    summary: "Get Iwb",
  })
  @get()
  static getIwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwb",
  })
  @post("{id}")
  static createIwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
