import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("diu")
export default class DiuController {
  @operation({
    summary: "Get Diu",
  })
  @get()
  static getDiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Diu",
  })
  @post("{id}")
  static createDiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
