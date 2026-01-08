import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfy")
export default class HfyController {
  @operation({
    summary: "Get Hfy",
  })
  @get()
  static getHfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfy",
  })
  @post("{id}")
  static createHfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
