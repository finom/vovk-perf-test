import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ile")
export default class IleController {
  @operation({
    summary: "Get Ile",
  })
  @get()
  static getIle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ile",
  })
  @post("{id}")
  static createIle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
