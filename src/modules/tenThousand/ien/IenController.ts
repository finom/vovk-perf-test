import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ien")
export default class IenController {
  @operation({
    summary: "Get Ien",
  })
  @get()
  static getIen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ien",
  })
  @post("{id}")
  static createIen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
