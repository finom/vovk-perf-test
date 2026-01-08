import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eaw")
export default class EawController {
  @operation({
    summary: "Get Eaw",
  })
  @get()
  static getEaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaw",
  })
  @post("{id}")
  static createEaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
