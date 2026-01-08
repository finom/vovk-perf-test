import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dry")
export default class DryController {
  @operation({
    summary: "Get Dry",
  })
  @get()
  static getDry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dry",
  })
  @post("{id}")
  static createDry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
