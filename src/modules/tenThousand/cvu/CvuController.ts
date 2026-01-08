import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvu")
export default class CvuController {
  @operation({
    summary: "Get Cvu",
  })
  @get()
  static getCvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvu",
  })
  @post("{id}")
  static createCvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
