import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibq")
export default class IbqController {
  @operation({
    summary: "Get Ibq",
  })
  @get()
  static getIbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibq",
  })
  @post("{id}")
  static createIbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
