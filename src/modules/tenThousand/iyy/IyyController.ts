import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyy")
export default class IyyController {
  @operation({
    summary: "Get Iyy",
  })
  @get()
  static getIyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyy",
  })
  @post("{id}")
  static createIyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
