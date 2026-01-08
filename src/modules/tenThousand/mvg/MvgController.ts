import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvg")
export default class MvgController {
  @operation({
    summary: "Get Mvg",
  })
  @get()
  static getMvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvg",
  })
  @post("{id}")
  static createMvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
