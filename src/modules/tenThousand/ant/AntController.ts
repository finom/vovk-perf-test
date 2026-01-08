import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ant")
export default class AntController {
  @operation({
    summary: "Get Ant",
  })
  @get()
  static getAnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ant",
  })
  @post("{id}")
  static createAnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
