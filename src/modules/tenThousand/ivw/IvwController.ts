import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivw")
export default class IvwController {
  @operation({
    summary: "Get Ivw",
  })
  @get()
  static getIvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivw",
  })
  @post("{id}")
  static createIvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
