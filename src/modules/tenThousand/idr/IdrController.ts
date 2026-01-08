import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idr")
export default class IdrController {
  @operation({
    summary: "Get Idr",
  })
  @get()
  static getIdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idr",
  })
  @post("{id}")
  static createIdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
