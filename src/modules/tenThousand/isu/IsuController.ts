import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isu")
export default class IsuController {
  @operation({
    summary: "Get Isu",
  })
  @get()
  static getIsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isu",
  })
  @post("{id}")
  static createIsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
