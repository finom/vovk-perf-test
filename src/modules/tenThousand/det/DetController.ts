import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("det")
export default class DetController {
  @operation({
    summary: "Get Det",
  })
  @get()
  static getDet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Det",
  })
  @post("{id}")
  static createDet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
