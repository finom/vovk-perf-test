import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grj")
export default class GrjController {
  @operation({
    summary: "Get Grj",
  })
  @get()
  static getGrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grj",
  })
  @post("{id}")
  static createGrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
