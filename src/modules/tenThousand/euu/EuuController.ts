import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euu")
export default class EuuController {
  @operation({
    summary: "Get Euu",
  })
  @get()
  static getEuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euu",
  })
  @post("{id}")
  static createEuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
