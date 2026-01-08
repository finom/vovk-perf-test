import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikt")
export default class IktController {
  @operation({
    summary: "Get Ikt",
  })
  @get()
  static getIkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikt",
  })
  @post("{id}")
  static createIkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
