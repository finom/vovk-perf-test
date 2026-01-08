import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdx")
export default class KdxController {
  @operation({
    summary: "Get Kdx",
  })
  @get()
  static getKdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdx",
  })
  @post("{id}")
  static createKdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
