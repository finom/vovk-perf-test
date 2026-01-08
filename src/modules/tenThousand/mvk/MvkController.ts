import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvk")
export default class MvkController {
  @operation({
    summary: "Get Mvk",
  })
  @get()
  static getMvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvk",
  })
  @post("{id}")
  static createMvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
