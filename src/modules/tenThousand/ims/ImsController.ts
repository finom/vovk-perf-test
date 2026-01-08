import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ims")
export default class ImsController {
  @operation({
    summary: "Get Ims",
  })
  @get()
  static getIms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ims",
  })
  @post("{id}")
  static createIms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
