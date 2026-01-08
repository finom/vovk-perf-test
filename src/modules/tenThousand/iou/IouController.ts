import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iou")
export default class IouController {
  @operation({
    summary: "Get Iou",
  })
  @get()
  static getIou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iou",
  })
  @post("{id}")
  static createIou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
