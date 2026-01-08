import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivy")
export default class IvyController {
  @operation({
    summary: "Get Ivy",
  })
  @get()
  static getIvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivy",
  })
  @post("{id}")
  static createIvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
