import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lab")
export default class LabController {
  @operation({
    summary: "Get Lab",
  })
  @get()
  static getLab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lab",
  })
  @post("{id}")
  static createLab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
