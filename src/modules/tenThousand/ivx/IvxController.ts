import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivx")
export default class IvxController {
  @operation({
    summary: "Get Ivx",
  })
  @get()
  static getIvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivx",
  })
  @post("{id}")
  static createIvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
