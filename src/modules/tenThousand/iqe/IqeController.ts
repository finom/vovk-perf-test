import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqe")
export default class IqeController {
  @operation({
    summary: "Get Iqe",
  })
  @get()
  static getIqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqe",
  })
  @post("{id}")
  static createIqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
