import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cel")
export default class CelController {
  @operation({
    summary: "Get Cel",
  })
  @get()
  static getCel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cel",
  })
  @post("{id}")
  static createCel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
