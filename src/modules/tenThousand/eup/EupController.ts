import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eup")
export default class EupController {
  @operation({
    summary: "Get Eup",
  })
  @get()
  static getEup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eup",
  })
  @post("{id}")
  static createEup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
