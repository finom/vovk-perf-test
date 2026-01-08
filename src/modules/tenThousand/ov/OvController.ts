import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ov")
export default class OvController {
  @operation({
    summary: "Get Ov",
  })
  @get()
  static getOv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ov",
  })
  @post("{id}")
  static createOv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
