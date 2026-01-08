import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("its")
export default class ItsController {
  @operation({
    summary: "Get Its",
  })
  @get()
  static getIts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Its",
  })
  @post("{id}")
  static createIts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
