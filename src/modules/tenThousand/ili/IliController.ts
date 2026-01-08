import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ili")
export default class IliController {
  @operation({
    summary: "Get Ili",
  })
  @get()
  static getIli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ili",
  })
  @post("{id}")
  static createIli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
