import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afy")
export default class AfyController {
  @operation({
    summary: "Get Afy",
  })
  @get()
  static getAfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afy",
  })
  @post("{id}")
  static createAfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
