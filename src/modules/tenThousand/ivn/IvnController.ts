import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivn")
export default class IvnController {
  @operation({
    summary: "Get Ivn",
  })
  @get()
  static getIvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivn",
  })
  @post("{id}")
  static createIvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
