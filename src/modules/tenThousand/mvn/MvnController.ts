import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvn")
export default class MvnController {
  @operation({
    summary: "Get Mvn",
  })
  @get()
  static getMvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvn",
  })
  @post("{id}")
  static createMvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
